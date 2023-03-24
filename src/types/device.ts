import { UALADSDeviceStateMachine } from "node-opcua-nodeset-spectaris-de-lads";
import { ILADSFunctionalUnit } from "./functionalunit";
import {LockingType} from "./locking";

/**
 * @see UATask
 */
export interface IUATask {
  execute: () => void;
  lastExecution: Date;
  lastResult: string;
}

export interface IUASupply {
  name: string;
}

// TODO: define proper states. Dummy values only!
export enum UAFiniteState {
  "RUNNING",
  "PAUSED",
}

export interface IDeviceOperational {
  currentState: UAFiniteState;
  gotoMaintenance?: () => void;
  gotoOperating?: () => void;
  gotoShutdown?: () => void;
  gotoStandby?: () => void;
}

/**
 * @see: UABaseMaintenanceInformation_Base
 */
export interface IUABaseMaintenanceInformation {
  totalOperationCycles?: bigint;
  totalOperationDuration?: number;
}

/**
 * @see UALADSComponent_identification
 */
export interface ILADSComponentIdentification {
  /**
   * deviceRevision
   * A string representation of the overall revision
   * level of the component. Often, it is increased
   * when either the SoftwareRevision and / or the
   * HardwareRevision of the component is increased.
   * As an example, it can be used in ERP systems
   * together with the ProductCode.
   */
  deviceRevision: string;
  /**
   * initialOperationDate
   * The date, when the MachineryItem was switched on
   * the first time after it has left the manufacturer
   * plant.
   */
  initialOperationDate?: Date;
  /**
   * manufacturer
   * A human-readable, localized name of the
   * manufacturer of the MachineryItem.
   */
  manufacturer: string;
  /**
   * monthOfConstruction
   * The month in which the manufacturing process of
   * the MachineryItem has been completed. It shall be
   * a number between 1 and 12, representing the month
   * from January to December.
   */
  monthOfConstruction?: number;
  /**
   * serialNumber
   * A string containing a unique production number of
   * the manufacturer of the MachineryItem. The global
   * uniqueness of the serial number is only given in
   * the context of the manufacturer, and potentially
   * the model. The value shall not change during the
   * life-cycle of the MachineryItem.
   */
  serialNumber: string;
  /**
   * yearOfConstruction
   * The year (Gregorian calendar) in which the
   * manufacturing process of the MachineryItem has
   * been completed. It shall be a four-digit number
   * and never change during the life-cycle of a
   * MachineryItem.
   */
  yearOfConstruction?: number;
}

/**
 * @see UALADSDevice_identification
 */
export interface ILADSDeviceIdentification
  extends ILADSComponentIdentification {
  /**
   * assetId
   * To be used by end users to store a unique
   * identification in the context of their overall
   * application. Servers shall support at least 40
   * Unicode characters for the clients writing this
   * value, this means clients can expect to be able
   * to write strings with a length of 40 Unicode
   * characters into that field.
   */
  assetId: string;
  /**
   * componentName
   * To be used by end users to store a human-readable
   * localized text for the MachineryItem. The minimum
   * number of locales supported for this property
   * shall be two. Servers shall support at least 40
   * Unicode characters for the clients writing the
   * text part of each locale, this means clients can
   * expect to be able to write texts with a length of
   * 40 Unicode characters into that field.
   */
  componentName: string;
  /**
   * deviceClass
   * Indicates in which domain or for what purpose the
   * MachineryItem is used.
   */
  deviceClass?: string;
  /**
   * hardwareRevision
   * A string representation of the revision level of
   * the hardware of a MachineryItem. Hardware is
   * physical equipment, as opposed to programs,
   * procedures, rules and associated documentation.
   * Many machines will not provide such information
   * due to the modular and configurable nature of the
   * machine.
   */
  hardwareRevision: string;
  /**
   * location
   * To be used by end users to store the location of
   * the machine in a scheme specific to the end user.
   * Servers shall support at least 60 Unicode
   * characters for the clients writing this value,
   * this means clients can expect to be able to write
   * strings with a length of 60 Unicode characters
   * into that field.
   */
  location: string;
  /**
   * manufacturer
   * A human-readable, localized name of the
   * manufacturer of the MachineryItem.
   */
  manufacturerUri: URL;
  /**
   * model
   * A human-readable, localized name of the model of
   * the MachineryItem.
   */
  model: string;
  /**
   * productCode
   * A machine-readable string of the model of the
   * MachineryItem, that might include options like
   * the hardware configuration of the model. This
   * information might be provided by the ERP system
   * of the vendor. For example, it can be used as
   * order information.
   */
  productCode?: string;
  /**
   * productInstanceUri
   * A globally unique resource identifier provided by
   * the manufacturer of the machine
   */
  productInstanceUri: string;
  /**
   * softwareRevision
   * A string representation of the revision level of
   * a MachineryItem. In most cases, MachineryItems
   * consist of several software components. In that
   * case, information about the software components
   * might be provided as additional information in
   * the address space, including individual revision
   * information. In that case, this property is
   * either not provided or provides an overall
   * software revision level. The value might change
   * during the life-cycle of a MachineryItem.
   */
  softwareRevision: string;
}

/**
 * @see UALADSComponent_Base
 */
export interface ILADSComponent {
  // from UALADSComponent_Base
  /**
   * componentSet
   * Set of sub-components.
   */
  components?: ILADSComponent[];
  /**
   * deviceHealth
   * Indicates the health status of a device as
   * defined by NAMUR Recommendation NE 107.
   */
  deviceHealth?: number;
  /**
   * deviceHealthAlarms
   * Groups the all instances of device health realted
   * alarms.
   */
  deviceHealthAlarms?: any[];
  deviceManual?: string;
  identification: ILADSComponentIdentification;
  maintenance?: IUABaseMaintenanceInformation;
  tasks?: IUATask[];
}

export interface ILADSDevice extends ILADSComponent {
  // from UAComponent_Base
  // from UADevice_Base

  /**
   * revisionCounter
   * An incremental counter indicating the number of
   * times the static data within the Device has been
   * modified
   */
  revisionCounter: number;
  /**
   * deviceTypeImage
   * Organizes pictures of the device.
   */
  deviceTypeImage?: any[];
  /**
   * documentation
   * Organizes documents for the device.
   */
  documentation?: any[];
  /**
   * protocolSupport
   * Protocol-specific files for the device.
   */
  protocolSupport?: any[];
  /**
   * imageSet
   * Organizes images that are used within UIElements.
   */
  images?: any[];

  // from UALADSDevice_Base
  deviceHealth: number;
  /**
   * deviceManual
   * Address (pathname in the file system or a URL |
   * Web address) of user manual for the device
   */
  deviceManual: string;
  /**
   * functionalUnitSet
   * Contains functional units of this device.
   */
  functionalUnits: ILADSFunctionalUnit[];
  identification: ILADSDeviceIdentification;
  /**
   * lock
   * Used to lock the topology element.
   */
  lock?: LockingType;

  operational?: IDeviceOperational;
  stateMachine?: UALADSDeviceStateMachine;
  supplySet: IUASupply[];
}
