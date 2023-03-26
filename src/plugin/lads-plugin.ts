import {BaseNode, INamespace, OPCUAServer, ReferenceTypeIds, UAObject, UAObjectType, UAReferenceType} from "node-opcua";
import assert from "assert";
import {UARootFolder} from "node-opcua-address-space/source/ua_root_folder";
import {LADSDevice} from "./device";
import {LADSComponentType, LADSDeviceType, ILADSComponent} from "../types";
import {LADSComponent} from "./component";

export class LadsOPCUAServerPlugin {
  private opcua: OPCUAServer;
  // used namespaces
  private nsLocal: INamespace;
  private nsDI: INamespace;
  private nsMachinery: INamespace;
  private nsAMB: INamespace;
  private nsLADS: INamespace;
  // central nodes
  private rootFolder: UARootFolder;
  private deviceSet: BaseNode;

  // used types
  private typeDevice: UAObjectType;
  private typeFunctionalUnit: UAObjectType;
  private typeAnalogSensorFunction: UAObjectType;
  private typeComponent: UAObjectType;
  private typeComponentSetType: UAObjectType;


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
    this.nsLADS = addressSpace.getNamespace('http://opcfoundation.org/UA/LADS/');

    assert(this.nsDI, 'Could not load namespace UA/DI');
    assert(this.nsMachinery, 'Could not load namespace UA/Machinery');
    assert(this.nsAMB, 'Could not load namespace UA/AMB');
    assert(this.nsLADS, 'Could not load namespace UA/LADS');
    // read root folder node id
    this.rootFolder = addressSpace.rootFolder;
    assert(this.rootFolder, 'OPCUA rootFolder not found');
    const deviceSetNode = this.rootFolder.objects.getFolderElementByName("DeviceSet",this.nsDI.index);
    assert(deviceSetNode, 'OPCUA DeviceSet Node not found');
    this.deviceSet = deviceSetNode;
    // load required type node ids
    this.typeDevice = this.assertFindObjectType(this.nsLADS,'LADSDeviceType');
    this.typeComponent = this.assertFindObjectType(this.nsLADS,'LADSComponentType');
    this.typeFunctionalUnit = this.assertFindObjectType(this.nsLADS,'FunctionalUnitType');
    this.typeAnalogSensorFunction = this.assertFindObjectType(this.nsLADS,'AnalogSensorFunctionType');
    this.typeComponentSetType = this.assertFindObjectType(this.nsLADS,'ComponentSetType');
  }

  assertFindObjectType(ns: INamespace, name: string) {
    const type = ns.findObjectType(name);
    if (!type) throw new Error(`Type ${name} not defined in namespace ${ns.namespaceUri}`);
    return type;
  }

  createDevice(serial: string, deviceProps: LADSDeviceType): LADSDevice {
    console.log(`adding device ${serial}...`);

    // create device node with all its properties
    const deviceNode = this.typeDevice.instantiate({
      componentOf: this.deviceSet,
      browseName: serial
    });
    console.log(`adding device ${serial} -> instantiated...`);

    // decorate node with lads-device
    const newDevice =  new LADSDevice(deviceNode, deviceProps);

    // load all values from server
    newDevice.loadPropertiesFromServer();
    return newDevice;
  }

  createComponent(parent: ILADSComponent, identifier: string, componentProps: LADSComponentType): ILADSComponent {
    console.log(`adding component ${identifier}`);

    // resolve parent nodes
    // A LADSDevice has also the components node which shall also contain the components
    let componentsFolderNode = parent.node.getChildByName("Components", this.nsLADS.index);
    if (!componentsFolderNode) {
      componentsFolderNode = this.typeComponentSetType.instantiate({
        componentOf: parent.node,
        browseName: 'Components'
      })
    };

    // create component node with all its properties
    const componentNode = this.typeComponent.instantiate({
      componentOf: componentsFolderNode,
      browseName: identifier
    });

    // decorate node with lads-device
    const newComponent =  new LADSComponent(componentNode, componentProps);

    // load all values from server
    newComponent.loadPropertiesFromServer();
    return newComponent;
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
