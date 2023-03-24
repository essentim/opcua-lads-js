import { UALADSDeviceStateMachine } from "node-opcua-nodeset-spectaris-de-lads";
import {
  IDeviceOperational,
  ILADSDevice,
  ILADSDeviceIdentification,
  IUABaseMaintenanceInformation,
  IUASupply,
  IUATask,
} from "../types/device";

import { ILADSFunctionalUnit } from "../types/functionalunit";

export class LADSDevice implements ILADSDevice {
  identification: ILADSDeviceIdentification;
  revisionCounter: number;
  deviceTypeImage?: any[] | undefined;
  documentation?: any[] | undefined;
  protocolSupport?: any[] | undefined;
  images?: any[] | undefined;
  deviceHealth: number;
  deviceManual: string;
  functionalUnits: ILADSFunctionalUnit[];
  hardwareRevision: string;
  lock: LockingType;
  operational?: IDeviceOperational | undefined;
  stateMachine: UALADSDeviceStateMachine;
  supplySet: IUASupply[];
  components?: ILadsComponent[] | undefined;
  deviceHealthAlarms?: any[] | undefined;
  maintenance?: IUABaseMaintenanceInformation | undefined;
  tasks?: IUATask[] | undefined;

  constructor(serial: string, identification: ILADSDeviceIdentification) {
    this.identification = {
      ...identification,
      serialNumber: serial,
    };
  }
}
