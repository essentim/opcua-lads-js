import { NodeId } from "node-opcua-nodeid";
import { UALADSDeviceStateMachine } from "node-opcua-nodeset-spectaris-de-lads";
import { ILADSFunctionalUnit } from "./functionalunit";
import { LockingType } from "./locking";
import {ILADSComponent, ILADSComponentIdentification} from "./component";

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

export interface IDeviceStateMachine {
  gotoMaintenance?: () => void;
  gotoOperating?: () => void;
  gotoShutdown?: () => void;
  gotoStandby?: () => void;
  maintenance: number;
  maintenanceToOperatingTransition: number;
  maintenanceToShutdownTransition: number;
  operating: number;
  operatingToMaintenanceTransition: number;
  operatingToShutdownTransition: number;
  operatingToStandbyTransition: number;
  powerup: number;
  powerupToOperatingTransition: number;
  shutdown: number;
  standby: number;
  standbyToOperatingTransition: number;
  currentState: string;
  lastTransition?: string;
  availableStates?: NodeId[];
  availableTransitions?: NodeId[];
}

export interface IDeviceOperational {
  currentState: string;
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
 * Interface to work with the LADSDevice instance
 */
export interface ILADSDeviceIdentification extends ILADSComponentIdentification {
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
  readonly assetId: string;
  setAssetId(assetId: string): void;
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
  readonly componentName: string;
  setComponentName(componentName: string): void;
  /**
   * deviceClass
   * Indicates in which domain or for what purpose the
   * MachineryItem is used.
   */
  readonly deviceClass?: string;
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
  readonly hardwareRevision: string;
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
  readonly location: string;
  /**
   * manufacturer
   * A human-readable, localized name of the
   * manufacturer of the MachineryItem.
   */
  readonly manufacturerUri: string;
  /**
   * productInstanceUri
   * A globally unique resource identifier provided by
   * the manufacturer of the machine
   */
  readonly productInstanceUri: string;
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
  readonly softwareRevision: string;
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
  readonly revisionCounter: number;
  /**
   * deviceTypeImage
   * Organizes pictures of the device.
   */
  readonly deviceTypeImage?: any[];
  /**
   * documentation
   * Organizes documents for the device.
   */
  readonly documentation?: any[];
  /**
   * protocolSupport
   * Protocol-specific files for the device.
   */
  readonly protocolSupport?: any[];
  /**
   * imageSet
   * Organizes images that are used within UIElements.
   */
  readonly images?: any[];

  // from UALADSDevice_Base
  readonly deviceHealth: number;
  /**
   * deviceManual
   * Address (pathname in the file system or a URL |
   * Web address) of user manual for the device
   */
  readonly deviceManual: string;
  /**
   * functionalUnitSet
   * Contains functional units of this device.
   */
  readonly functionalUnits: ILADSFunctionalUnit[];
  readonly identification: ILADSDeviceIdentification;
  /**
   * lock
   * Used to lock the topology element.
   */
  readonly lock?: LockingType;

  readonly operational?: IDeviceOperational;
  readonly stateMachine?: UALADSDeviceStateMachine;
  readonly supplySet: IUASupply[];
}
