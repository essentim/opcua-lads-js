/**
 * This file contains type definitions that are used to create new instances of LADS specific classes.
 * All required and optional information, that are required to generate a fully compatible LADS-device
 * are part of the LADS type.
 * When a object is instantiated, additional function will be available via the corresponding interface
 * to manipulate editable values during runtime.
 */

/**
 * @see UALADSComponent_Base
 * @see UALADSComponent_identification
 * Type to instantiate a new lads component
 */
export type LADSComponentType = {
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
  componentName?: string;
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
   * deviceRevision
   * A string representation of the overall revision
   * level of the component. Often, it is increased
   * when either the SoftwareRevision and / or the
   * HardwareRevision of the component is increased.
   * As an example, it can be used in ERP systems
   * together with the ProductCode.
   */
  hardwareRevision?: string;
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
   * manufacturer
   * A human-readable, localized name of the
   * manufacturer of the MachineryItem.
   */
  manufacturerUri?: string;
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
  productInstanceUri?: string;
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
  softwareRevision?: string;
  /**
   * monthOfConstruction
   * The month in which the manufacturing process of
   * the MachineryItem has been completed. It shall be
   * a number between 1 and 12, representing the month
   * from January to December.
   */
  monthOfConstruction?: number;
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

// FIXME: reference types from interface to use the same type, e.g.
//   assetId: LADSDeviceIdentification['assetId']
/**
 * @see UALADSDevice_Base
 * @see UALADSDevice_identification
 * Type to intanciate a new lads device
 */
export type LADSDeviceType = LADSComponentType & {
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
  manufacturerUri: string;
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
