// ----- this file has been automatically generated - do not edit
import { UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { LocalizedText, QualifiedName } from "node-opcua-data-model"
import { UInt64, UInt16, Byte, UAString } from "node-opcua-basic-types"
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
import { UAFolder } from "node-opcua-nodeset-ua/source/ua_folder"
import { EnumDeviceHealth } from "node-opcua-nodeset-di/source/enum_device_health"
import { UAComponent, UAComponent_Base } from "node-opcua-nodeset-di/source/ua_component"
import { UAMachineryComponentIdentification } from "node-opcua-nodeset-machinery/source/ua_machinery_component_identification"
import { UAComponentSet } from "./ua_component_set"
import { UABaseMaintenanceInformation } from "./ua_base_maintenance_information"
import { UATaskSet } from "./ua_task_set"
export interface UALADSComponent_identification extends Omit<UAMachineryComponentIdentification, "deviceRevision"|"initialOperationDate"|"manufacturer"|"monthOfConstruction"|"serialNumber"|"yearOfConstruction"> { // Object
      /**
       * deviceRevision
       * A string representation of the overall revision
       * level of the component. Often, it is increased
       * when either the SoftwareRevision and / or the
       * HardwareRevision of the component is increased.
       * As an example, it can be used in ERP systems
       * together with the ProductCode.
       */
      deviceRevision: UAProperty<UAString, /*z*/DataType.String>;
      /**
       * initialOperationDate
       * The date, when the MachineryItem was switched on
       * the first time after it has left the manufacturer
       * plant.
       */
      initialOperationDate: UAProperty<Date, /*z*/DataType.DateTime>;
      /**
       * manufacturer
       * A human-readable, localized name of the
       * manufacturer of the MachineryItem.
       */
      manufacturer: UAProperty<LocalizedText, /*z*/DataType.LocalizedText>;
      /**
       * monthOfConstruction
       * The month in which the manufacturing process of
       * the MachineryItem has been completed. It shall be
       * a number between 1 and 12, representing the month
       * from January to December.
       */
      monthOfConstruction: UAProperty<Byte, /*z*/DataType.Byte>;
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
       * yearOfConstruction
       * The year (Gregorian calendar) in which the
       * manufacturing process of the MachineryItem has
       * been completed. It shall be a four-digit number
       * and never change during the life-cycle of a
       * MachineryItem.
       */
      yearOfConstruction: UAProperty<UInt16, /*z*/DataType.UInt16>;
}
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:LADSComponentType ns=3;i=1024                   |
 * |isAbstract      |false                                             |
 */
export interface UALADSComponent_Base extends UAComponent_Base {
    componentName?: UAProperty<LocalizedText, /*z*/DataType.LocalizedText>;
    /**
     * componentSet
     * Set of sub-components.
     */
    componentSet?: UAComponentSet;
    /**
     * deviceHealth
     * Indicates the health status of a device as
     * defined by NAMUR Recommendation NE 107.
     */
    deviceHealth?: UABaseDataVariable<EnumDeviceHealth, /*z*/DataType.Int32>;
    /**
     * deviceHealthAlarms
     * Groups the all instances of device health realted
     * alarms.
     */
    deviceHealthAlarms?: UAFolder;
    deviceManual?: UAProperty<UAString, /*z*/DataType.String>;
    deviceRevision?: UAProperty<UAString, /*z*/DataType.String>;
    hardwareRevision?: UAProperty<UAString, /*z*/DataType.String>;
    identification: UALADSComponent_identification;
    maintenance?: UABaseMaintenanceInformation;
    manufacturer: UAProperty<LocalizedText, /*z*/DataType.LocalizedText>;
    manufacturerUri?: UAProperty<UAString, /*z*/DataType.String>;
    model: UAProperty<LocalizedText, /*z*/DataType.LocalizedText>;
    productCode?: UAProperty<UAString, /*z*/DataType.String>;
    productInstanceUri?: UAProperty<UAString, /*z*/DataType.String>;
    serialNumber: UAProperty<UAString, /*z*/DataType.String>;
    softwareRevision?: UAProperty<UAString, /*z*/DataType.String>;
    taskSet?: UATaskSet;
}
export interface UALADSComponent extends Omit<UAComponent, "componentName"|"deviceManual"|"deviceRevision"|"hardwareRevision"|"identification"|"manufacturer"|"manufacturerUri"|"model"|"productCode"|"productInstanceUri"|"serialNumber"|"softwareRevision">, UALADSComponent_Base {
}