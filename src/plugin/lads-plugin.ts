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
    const deviceNode = this.typeDevice.instantiate({
      componentOf: this.deviceSet,
      browseName: serial
    });

    // decorate node with lads-device
    const newDevice =  new LADSDevice(deviceNode, deviceProps);

    // load all values from server
    newDevice.loadPropertiesFromServer();
    return newDevice;
  }

  private getChildByBrowsePath(deviceNode: UAObject, browseName: string) {
    let traversedNode: BaseNode | null = deviceNode;
    for (const subPath of browseName.split('/')) {
      if (!traversedNode) throw new Error('node not found');
      traversedNode = traversedNode.getChildByName(subPath);
    }
    return traversedNode;
  }
}
