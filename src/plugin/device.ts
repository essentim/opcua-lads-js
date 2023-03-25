import { UALADSDeviceStateMachine } from "node-opcua-nodeset-spectaris-de-lads";
import {
  IDeviceOperational,
  ILADSComponent,
  ILADSDevice,
  ILADSDeviceIdentification,
  IUABaseMaintenanceInformation,
  IUASupply,
  IUATask,
} from "../types/device";

import { ILADSFunctionalUnit } from "../types/functionalunit";
import {LockingType} from "../types/locking";
import {BaseNode, UAObject, UAVariable} from "node-opcua";
import {MappedUANode} from "./MappedNode";

export class LADSDevice extends MappedUANode implements ILADSDevice {
  identification: ILADSDeviceIdentification = {
    assetId: "",
    componentName: "",
    location: "",
    manufacturerUri: new URL("https://foo.bar"),
    model: "",
    productInstanceUri: "",
    deviceRevision: "",
    hardwareRevision: "",
    softwareRevision: "",
    manufacturer: "",
    serialNumber: "",
  };

  // presentation
  deviceTypeImage?: any[] | undefined;
  images?: any[] | undefined;
  documentation?: any[] | undefined;
  deviceManual: string = "";

  protocolSupport?: any[] | undefined;

  // device state
  deviceHealth: number = 0; // FIXME: set correct enums here
  // FIXME: create mapping for statemachine and initialize
  // stateMachine: UALADSDeviceStateMachine;
  lock?: LockingType;
  operational?: IDeviceOperational;
  /**
   * revisionCounter
   * An incremental counter indicating the number of
   * times the static data within the Device has been
   * modified
   */
  revisionCounter: number = 0;

  deviceHealthAlarms?: any[] | undefined = undefined;
  maintenance?: IUABaseMaintenanceInformation | undefined;
  tasks?: IUATask[] | undefined;
  supplySet: IUASupply[] = [];

  components?: ILADSComponent[] = [];
  functionalUnits: ILADSFunctionalUnit[] = [];

  constructor(deviceNode: UAObject) {
    super(deviceNode);

    this.loadPropertiesFromNode(deviceNode);
  }

  private loadPropertiesFromNode(deviceNode: UAObject): void {
    const revisionCounterNode = this.getChildByBrowsePath('RevisionCounter') as UAVariable;
    this.revisionCounter = revisionCounterNode.readValue().value.value;
  }
}
