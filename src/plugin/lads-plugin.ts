import {BaseNode, DataType, INamespace, OPCUAServer, UAObject, UAObjectType, UAVariable} from "node-opcua";
import {ILADSDevice, ILADSDeviceIdentification} from "../types/device";
import assert from "assert";
import {UARootFolder} from "node-opcua-address-space/source/ua_root_folder";
import {LADSDevice} from "./device";

export class LadsOPCUAServerPlugin {
  private opcua: OPCUAServer;
  private nsLocal: INamespace;
  private nsDI: INamespace;
  private nsMachinery: INamespace;
  private nsAMB: INamespace;
  private nsLADS: INamespace;
  private rootFolder: UARootFolder;
  private typeDevice: UAObjectType;
  private typeFunctionalUnit: UAObjectType;
  private typeAnalogSensorFunction: UAObjectType;
  private deviceSet: BaseNode;

  private nodeRefs = new Map<ILADSDevice,UAObject>();

  constructor(opcuaServer: OPCUAServer) {
    this.opcua = opcuaServer;
    // load type nodes
    // read loaded namespace ids
    const { addressSpace } = this.opcua.engine;
    if (addressSpace === null) {
      throw new Error('could not find node-opcua addressSpace');
    }
    this.nsLocal = addressSpace.getOwnNamespace();
    this.nsDI = addressSpace.getNamespace('http://opcfoundation.org/UA/DI/');
    this.nsMachinery = addressSpace.getNamespace('http://opcfoundation.org/UA/Machinery/');
    this.nsAMB = addressSpace.getNamespace('http://opcfoundation.org/UA/AMB/');
    this.nsLADS = addressSpace.getNamespace('http://spectaris.de/LADS/');

    // read root folder node id
    this.rootFolder = addressSpace.rootFolder;
    assert(this.rootFolder, 'OPCUA rootFolder not found');
    const deviceSetNode = this.rootFolder.objects.getFolderElementByName("DeviceSet",this.nsDI.index);
    assert(deviceSetNode, 'OPCUA DeviceSet Node not found');
    this.deviceSet = deviceSetNode;
    // load required type node ids
    this.typeDevice = this.assertFindObjectType(this.nsLADS,'LADSDeviceType') ;
    this.typeFunctionalUnit = this.assertFindObjectType(this.nsLADS,'FunctionalUnitType');
    this.typeAnalogSensorFunction = this.assertFindObjectType(this.nsLADS,'AnalogSensorFunctionType');
  }

  assertFindObjectType(ns: INamespace, name: string) {
    const type = ns.findObjectType(name);
    if (!type) throw new Error(`Type ${name} not defined in namespace ${ns.namespaceUri}`);
    return type;
  }

  createDevice(serial: string, deviceProps: ILADSDeviceIdentification): LADSDevice {
    console.log(`adding device ${serial}`);
    // create device node with all its properties
    const deviceNode = this.createNodesDevice(serial, deviceProps);

    // read back created opc-nodes and create a lads-device object
    return new LADSDevice(deviceNode);
  }

  loadDevice(serial: string) : Promise<ILADSDevice> {

    throw new Error(`device not fould with serial: ${serial}`);
  }

  private createNodesDevice(browseName: string, deviceProps: ILADSDeviceIdentification) : UAObject {

    // instanciate device node
    const deviceNode = this.typeDevice.instantiate({
      componentOf: this.deviceSet,
      browseName: browseName
    });

    // Set DI Variables
    this.setVariableValueByBrowsePath<DataType.String>(deviceNode, 'AssetId', deviceProps.assetId);
    this.setVariableValueByBrowsePath<DataType.LocalizedText>(deviceNode, 'Model', deviceProps.model);
    this.setVariableValueByBrowsePath<DataType.LocalizedText>(deviceNode, 'Identification/Model', deviceProps.model);
    this.setVariableValueByBrowsePath<DataType.Int32>(deviceNode, 'RevisionCounter', 12);

    // Set Machinery Variables
    this.setVariableValueByBrowsePath<DataType.String>(deviceNode, 'Identification/AssetId', deviceProps.assetId);
    this.setVariableValueByBrowsePath<DataType.String>(deviceNode, 'Identification/Location', deviceProps.location);


    // Set LADS variables
    /*
    assetId: "MYStockNumber1",
      componentName: "Sensor1",
      location: "here",
      manufacturerUri: new URL("https://essentim.com"),
      model: "sphere",
      productInstanceUri: "test",
      deviceRevision: "1", // FIXME: deviceRevision === hardwareRevision?!?
      hardwareRevision: "1",
      softwareRevision: "1",
      manufacturer: "We",
      serialNumber: "SP1JK3900001",

     */
    return deviceNode;
  }

  private getChildByBrowsePath(deviceNode: UAObject, browseName: string) {
    let traversedNode: BaseNode | null = deviceNode;
    for (const subPath of browseName.split('/')) {
      if (!traversedNode) throw new Error('node not found');
      traversedNode = traversedNode.getChildByName(subPath);
    }
    return traversedNode;
  }

  private setVariableValueByBrowsePath<T>(deviceNode: UAObject, browsePath: string, value: any) {
    const variableNode = this.getChildByBrowsePath(deviceNode, browsePath) as UAVariable;
    if (!variableNode) throw new Error(`could not find variable ${browsePath}`);
    variableNode.setValueFromSource({value, dataType: variableNode.getBasicDataType() });
  }
}
