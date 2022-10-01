// ----- this file has been automatically generated - do not edit
import { UAMethod, UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { LocalizedText, QualifiedName } from "node-opcua-data-model"
import { NodeId } from "node-opcua-nodeid"
import { UInt64, UInt32, Int32, UInt16, Byte, UAString } from "node-opcua-basic-types"
import { DTArgument } from "node-opcua-nodeset-ua/source/dt_argument"
import { UAFiniteStateVariable } from "node-opcua-nodeset-ua/source/ua_finite_state_variable"
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
import { UAFolder } from "node-opcua-nodeset-ua/source/ua_folder"
import { EnumDeviceHealth } from "node-opcua-nodeset-di/source/enum_device_health"
import { UAFunctionalGroup } from "node-opcua-nodeset-di/source/ua_functional_group"
import { UADevice, UADevice_Base } from "node-opcua-nodeset-di/source/ua_device"
import { UALockingServices } from "node-opcua-nodeset-di/source/ua_locking_services"
import { UAMachineIdentification } from "node-opcua-nodeset-machinery/source/ua_machine_identification"
import { UAMachineComponents } from "node-opcua-nodeset-machinery/source/ua_machine_components"
import { UAComponentSet } from "./ua_component_set"
import { UAFunctionalUnitSet } from "./ua_functional_unit_set"
import { UABaseMaintenanceInformation } from "./ua_base_maintenance_information"
import { UALADSDeviceStateMachine } from "./ua_lads_device_state_machine"
import { UASupplySet } from "./ua_supply_set"
import { UATaskSet } from "./ua_task_set"
export interface UALADSDevice_identification extends Omit<UAMachineIdentification, "assetId"|"componentName"|"deviceClass"|"hardwareRevision"|"initialOperationDate"|"location"|"manufacturer"|"manufacturerUri"|"model"|"monthOfConstruction"|"productCode"|"productInstanceUri"|"serialNumber"|"softwareRevision"|"yearOfConstruction"> { // Object
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
      assetId: UAProperty<UAString, /*z*/DataType.String>;
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
      componentName: UAProperty<LocalizedText, /*z*/DataType.LocalizedText>;
      /**
       * deviceClass
       * Indicates in which domain or for what purpose the
       * MachineryItem is used.
       */
      deviceClass?: UAProperty<UAString, /*z*/DataType.String>;
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
      hardwareRevision?: UAProperty<UAString, /*z*/DataType.String>;
      /**
       * initialOperationDate
       * The date, when the MachineryItem was switched on
       * the first time after it has left the manufacturer
       * plant.
       */
      initialOperationDate?: UAProperty<Date, /*z*/DataType.DateTime>;
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
      location: UAProperty<UAString, /*z*/DataType.String>;
      /**
       * manufacturer
       * A human-readable, localized name of the
       * manufacturer of the MachineryItem.
       */
      manufacturer: UAProperty<LocalizedText, /*z*/DataType.LocalizedText>;
      /**
       * manufacturerUri
       * A globally unique identifier of the manufacturer
       * of the MachineryItem.
       */
      manufacturerUri: UAProperty<UAString, /*z*/DataType.String>;
      /**
       * model
       * A human-readable, localized name of the model of
       * the MachineryItem.
       */
      model: UAProperty<LocalizedText, /*z*/DataType.LocalizedText>;
      /**
       * monthOfConstruction
       * The month in which the manufacturing process of
       * the MachineryItem has been completed. It shall be
       * a number between 1 and 12, representing the month
       * from January to December.
       */
      monthOfConstruction?: UAProperty<Byte, /*z*/DataType.Byte>;
      /**
       * productCode
       * A machine-readable string of the model of the
       * MachineryItem, that might include options like
       * the hardware configuration of the model. This
       * information might be provided by the ERP system
       * of the vendor. For example, it can be used as
       * order information.
       */
      productCode?: UAProperty<UAString, /*z*/DataType.String>;
      /**
       * productInstanceUri
       * A globally unique resource identifier provided by
       * the manufacturer of the machine
       */
      productInstanceUri: UAProperty<UAString, /*z*/DataType.String>;
      /**
       * serialNumber
       * A string containing a unique production number of
       * the manufacturer of the MachineryItem. The global
       * uniqueness of the serial number is only given in
       * the context of the manufacturer, and potentially
       * the model. The value shall not change during the
       * life-cycle of the MachineryItem.
       */
      serialNumber: UAProperty<UAString, /*z*/DataType.String>;
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
      softwareRevision?: UAProperty<UAString, /*z*/DataType.String>;
      /**
       * yearOfConstruction
       * The year (Gregorian calendar) in which the
       * manufacturing process of the MachineryItem has
       * been completed. It shall be a four-digit number
       * and never change during the life-cycle of a
       * MachineryItem.
       */
      yearOfConstruction?: UAProperty<UInt16, /*z*/DataType.UInt16>;
}
export interface UALADSDevice_operational extends UAFunctionalGroup { // Object
      currentState: UAFiniteStateVariable<LocalizedText>;
      gotoMaintenance?: UAMethod;
      gotoOperating?: UAMethod;
      gotoShutdown?: UAMethod;
      gotoStandby?: UAMethod;
}
/**
 * Base class for laboratory- and analytical devices
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:LADSDeviceType ns=3;i=1002                      |
 * |isAbstract      |false                                             |
 */
export interface UALADSDevice_Base extends UADevice_Base {
    assetId: UAProperty<UAString, /*z*/DataType.String>;
    componentName: UAProperty<LocalizedText, /*z*/DataType.LocalizedText>;
    components: UAMachineComponents;
    /**
     * componentSet
     * Set of components.
     */
    componentSet: UAComponentSet;
    deviceHealth: UABaseDataVariable<EnumDeviceHealth, /*z*/DataType.Int32>;
    deviceHealthAlarms?: UAFolder;
    /**
     * deviceManual
     * Address (pathname in the file system or a URL |
     * Web address) of user manual for the device
     */
    deviceManual: UAProperty<UAString, /*z*/DataType.String>;
    /**
     * deviceRevision
     * Overall revision level of the device
     */
    deviceRevision: UAProperty<UAString, /*z*/DataType.String>;
    /**
     * functionalUnitSet
     * Contains funtional units of this device.
     */
    functionalUnitSet: UAFunctionalUnitSet;
    /**
     * hardwareRevision
     * Revision level of the hardware of the device
     */
    hardwareRevision: UAProperty<UAString, /*z*/DataType.String>;
    identification: UALADSDevice_identification;
    /**
     * lock
     * Used to lock the topology element.
     */
    lock: UALockingServices;
    maintenance: UABaseMaintenanceInformation;
    /**
     * manufacturer
     * Name of the company that manufactured the device
     */
    manufacturer: UAProperty<LocalizedText, /*z*/DataType.LocalizedText>;
    manufacturerUri?: UAProperty<UAString, /*z*/DataType.String>;
    /**
     * model
     * Model name of the device
     */
    model: UAProperty<LocalizedText, /*z*/DataType.LocalizedText>;
    operational?: UALADSDevice_operational;
    /**
     * serialNumber
     * Identifier that uniquely identifies, within a
     * manufacturer, a device instance
     */
    serialNumber: UAProperty<UAString, /*z*/DataType.String>;
    /**
     * softwareRevision
     * Revision level of the software/firmware of the
     * device
     */
    softwareRevision: UAProperty<UAString, /*z*/DataType.String>;
    stateMachine: UALADSDeviceStateMachine;
    supplySet: UASupplySet;
    taskSet: UATaskSet;
}
export interface UALADSDevice extends Omit<UADevice, "assetId"|"componentName"|"deviceHealth"|"deviceHealthAlarms"|"deviceManual"|"deviceRevision"|"hardwareRevision"|"identification"|"lock"|"manufacturer"|"manufacturerUri"|"model"|"serialNumber"|"softwareRevision">, UALADSDevice_Base {
}