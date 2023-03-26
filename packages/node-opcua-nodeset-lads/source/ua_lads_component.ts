// ----- this file has been automatically generated - do not edit
import { UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { Int32, UAString } from "node-opcua-basic-types"
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
import { UAFolder } from "node-opcua-nodeset-ua/source/ua_folder"
import { UAFunctionalGroup } from "node-opcua-nodeset-di/source/ua_functional_group"
import { UAComponent, UAComponent_Base } from "node-opcua-nodeset-di/source/ua_component"
import { EnumDeviceHealth } from "node-opcua-nodeset-di/source/enum_device_health"
import { UALADSMaintenanceSet } from "./ua_lads_maintenance_set"
import { UALADSOperationCounters } from "./ua_lads_operation_counters"
import { UAComponentSet } from "./ua_component_set"
export interface UALADSComponent_identification extends Omit<UAFunctionalGroup, "assetId"|"componentName"|"deviceClass"|"deviceRevision"|"hardwareRevision"|"manufacturer"|"manufacturerUri"|"model"|"productCode"|"productInstanceUri"|"serialNumber"|"softwareRevision"> { // Object
      assetId?: UAProperty<UAString, DataType.String>;
      componentName?: UAProperty<LocalizedText, DataType.LocalizedText>;
      deviceClass?: UAProperty<UAString, DataType.String>;
      deviceManual?: UAProperty<UAString, DataType.String>;
      deviceRevision?: UAProperty<UAString, DataType.String>;
      hardwareRevision?: UAProperty<UAString, DataType.String>;
      manufacturer: UAProperty<LocalizedText, DataType.LocalizedText>;
      manufacturerUri?: UAProperty<UAString, DataType.String>;
      model?: UAProperty<LocalizedText, DataType.LocalizedText>;
      productCode?: UAProperty<UAString, DataType.String>;
      productInstanceUri?: UAProperty<UAString, DataType.String>;
      revisionCounter?: UAProperty<Int32, DataType.Int32>;
      serialNumber: UAProperty<UAString, DataType.String>;
      softwareRevision?: UAProperty<UAString, DataType.String>;
      operationalLocation?: UAProperty<UAString, DataType.String>;
      hierarchicalLocation?: UAProperty<UAString, DataType.String>;
}
export interface UALADSComponent_maintenance extends UALADSMaintenanceSet { // Object
      nodeVersion: UAProperty<UAString, DataType.String>;
}
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:LADSComponentType ns=4;i=1024                   |
 * |isAbstract      |false                                             |
 */
export interface UALADSComponent_Base extends UAComponent_Base {
    /**
     * deviceHealth
     * Indicates the health status of a device as
     * defined by NAMUR Recommendation NE 107.
     */
    deviceHealth?: UABaseDataVariable<EnumDeviceHealth, DataType.Int32>;
    /**
     * deviceHealthAlarms
     * Groups the all instances of device health realted
     * alarms.
     */
    deviceHealthAlarms?: UAFolder;
    identification: UALADSComponent_identification;
    operationCounters?: UALADSOperationCounters;
    maintenance?: UALADSComponent_maintenance;
    assetId?: UAProperty<UAString, DataType.String>;
    componentName?: UAProperty<LocalizedText, DataType.LocalizedText>;
    deviceClass?: UAProperty<UAString, DataType.String>;
    deviceManual?: UAProperty<UAString, DataType.String>;
    deviceRevision?: UAProperty<UAString, DataType.String>;
    hardwareRevision?: UAProperty<UAString, DataType.String>;
    manufacturer: UAProperty<LocalizedText, DataType.LocalizedText>;
    manufacturerUri?: UAProperty<UAString, DataType.String>;
    model?: UAProperty<LocalizedText, DataType.LocalizedText>;
    productCode?: UAProperty<UAString, DataType.String>;
    productInstanceUri?: UAProperty<UAString, DataType.String>;
    revisionCounter?: UAProperty<Int32, DataType.Int32>;
    serialNumber: UAProperty<UAString, DataType.String>;
    softwareRevision?: UAProperty<UAString, DataType.String>;
    components?: UAComponentSet;
    operationalLocation?: UAProperty<UAString, DataType.String>;
    hierarchicalLocation?: UAProperty<UAString, DataType.String>;
}
export interface UALADSComponent extends Omit<UAComponent, "identification"|"assetId"|"componentName"|"deviceClass"|"deviceManual"|"deviceRevision"|"hardwareRevision"|"manufacturer"|"manufacturerUri"|"model"|"productCode"|"productInstanceUri"|"revisionCounter"|"serialNumber"|"softwareRevision">, UALADSComponent_Base {
}