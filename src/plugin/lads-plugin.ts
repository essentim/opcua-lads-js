import {BaseNode, INamespace, makeBrowsePath, OPCUAServer, UAObjectType} from "node-opcua";
import {ILADSDevice} from "../types/device";
import { UALADSDevice } from "../../packages/node-opcua-nodeset-spectaris-de-lads/dist/index"
import assert from "assert";
import {AddressSpace} from "node-opcua-address-space/dist/source/address_space_ts";
import {Namespace} from "node-opcua-address-space/source/namespace";
import {UARootFolder} from "node-opcua-address-space/source/ua_root_folder";

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
    const deviceSetNode = this.nsDI.findNode("i=5001");
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

  addDevice(device: ILADSDevice) {
    console.log('adding device');
    const deviceNode = this.createDeviceNode(device)
  }

  loadDevice(serial: string) : Promise<ILADSDevice> {

    throw new Error(`device not fould with serial: ${serial}`);
  }
  private createDeviceNode(ladsDevice: ILADSDevice) {

    this.typeDevice.instantiate({
      // organizedBy: this.rootFolder.objects.deviceSet,
      componentOf: this.deviceSet,
      // browseName: deviceId,
      browseName: ladsDevice.identification.serialNumber
    });
  }
}
