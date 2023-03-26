import {IUABaseMaintenanceInformation, IUATask} from "./device";
import {UAObject} from "node-opcua";

/**
 * Interface to work with the LADSComponent instance
 */
export interface ILADSComponentIdentification {
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
  readonly componentName?: string;
  /**
   * deviceRevision
   * A string representation of the overall revision
   * level of the component. Often, it is increased
   * when either the SoftwareRevision and / or the
   * HardwareRevision of the component is increased.
   * As an example, it can be used in ERP systems
   * together with the ProductCode.
   */
  readonly deviceRevision: string;
  /**
   * deviceRevision
   * A string representation of the overall revision
   * level of the component. Often, it is increased
   * when either the SoftwareRevision and / or the
   * HardwareRevision of the component is increased.
   * As an example, it can be used in ERP systems
   * together with the ProductCode.
   */
  readonly hardwareRevision?: string;
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
  readonly softwareRevision?: string;
  /**
   * initialOperationDate
   * The date, when the MachineryItem was switched on
   * the first time after it has left the manufacturer
   * plant.
   */
  readonly initialOperationDate?: Date;
  /**
   * manufacturer
   * A human-readable, localized name of the
   * manufacturer of the MachineryItem.
   */
  readonly manufacturer: string;
  /**
   * manufacturer
   * A human-readable, localized name of the
   * manufacturer of the MachineryItem.
   */
  readonly manufacturerUri?: string;
  /**
   * model
   * A human-readable, localized name of the model of
   * the MachineryItem.
   */
  readonly model: string;
  /**
   * productCode
   * A machine-readable string of the model of the
   * MachineryItem, that might include options like
   * the hardware configuration of the model. This
   * information might be provided by the ERP system
   * of the vendor. For example, it can be used as
   * order information.
   */
  readonly productCode?: string;
  /**
   * productInstanceUri
   * A globally unique resource identifier provided by
   * the manufacturer of the machine
   */
  readonly productInstanceUri?: string;
  /**
   * serialNumber
   * A string containing a unique production number of
   * the manufacturer of the MachineryItem. The global
   * uniqueness of the serial number is only given in
   * the context of the manufacturer, and potentially
   * the model. The value shall not change during the
   * life-cycle of the MachineryItem.
   */
  readonly serialNumber: string;
  /**
   * monthOfConstruction
   * The month in which the manufacturing process of
   * the MachineryItem has been completed. It shall be
   * a number between 1 and 12, representing the month
   * from January to December.
   */
  readonly monthOfConstruction?: number;
  /**
   * yearOfConstruction
   * The year (Gregorian calendar) in which the
   * manufacturing process of the MachineryItem has
   * been completed. It shall be a four-digit number
   * and never change during the life-cycle of a
   * MachineryItem.
   */
  readonly yearOfConstruction?: number;
}

export interface ILADSObject {
  node: UAObject;
}
/**
 * @see UALADSComponent_Base
 */
export interface ILADSComponent extends ILADSObject {
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
