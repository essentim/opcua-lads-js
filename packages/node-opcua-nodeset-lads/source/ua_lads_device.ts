// ----- this file has been automatically generated - do not edit
import { UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { LocalizedText, QualifiedName } from "node-opcua-data-model"
import { Int32, UInt16, Byte, UAString } from "node-opcua-basic-types"
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
import { EnumDeviceHealth } from "node-opcua-nodeset-di/source/enum_device_health"
import { UAFunctionalGroup } from "node-opcua-nodeset-di/source/ua_functional_group"
import { UADevice, UADevice_Base } from "node-opcua-nodeset-di/source/ua_device"
import { UALADSMaintenanceSet } from "./ua_lads_maintenance_set"
import { UAComponentSet } from "./ua_component_set"
import { UAFunctionalUnitSet } from "./ua_functional_unit_set"
import { UALADSOperationCounters } from "./ua_lads_operation_counters"
import { UALADSDeviceStateMachine } from "./ua_lads_device_state_machine"
export interface UALADSDevice_identification extends Omit<UAFunctionalGroup, "manufacturer"|"model"|"deviceRevision"|"softwareRevision"|"serialNumber"|"assetId"|"componentName"|"hardwareRevision"|"manufacturerUri"|"productCode"|"productInstanceUri"> { // Object
      /**
       * revisionCounter
       * An incremental counter indicating the number of
       * times the static data within the Device has been
       * modified
       */
      revisionCounter: UAProperty<Int32, DataType.Int32>;
      /**
       * manufacturer
       * Name of the company that manufactured the device
       */
      manufacturer: UAProperty<LocalizedText, DataType.LocalizedText>;
      /**
       * model
       * Model name of the device
       */
      model: UAProperty<LocalizedText, DataType.LocalizedText>;
      /**
       * deviceManual
       * Address (pathname in the file system or a URL |
       * Web address) of user manual for the device
       */
      deviceManual: UAProperty<UAString, DataType.String>;
      /**
       * deviceRevision
       * Overall revision level of the device
       */
      deviceRevision: UAProperty<UAString, DataType.String>;
      /**
       * softwareRevision
       * Revision level of the software/firmware of the
       * device
       */
      softwareRevision: UAProperty<UAString, DataType.String>;
      /**
       * serialNumber
       * Identifier that uniquely identifies, within a
       * manufacturer, a device instance
       */
      serialNumber: UAProperty<UAString, DataType.String>;
      assetId: UAProperty<UAString, DataType.String>;
      componentName: UAProperty<LocalizedText, DataType.LocalizedText>;
      /**
       * hardwareRevision
       * Revision level of the hardware of the device
       */
      hardwareRevision: UAProperty<UAString, DataType.String>;
      manufacturerUri?: UAProperty<UAString, DataType.String>;
      productCode?: UAProperty<UAString, DataType.String>;
      productInstanceUri: UAProperty<UAString, DataType.String>;
      operationalLocation?: UAProperty<UAString, DataType.String>;
      hierarchicalLocation?: UAProperty<UAString, DataType.String>;
}
export interface UALADSDevice_maintenance extends UALADSMaintenanceSet { // Object
      nodeVersion: UAProperty<UAString, DataType.String>;
}
/**
 * Base class for laboratory- and analytical devices
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:LADSDeviceType ns=4;i=1002                      |
 * |isAbstract      |false                                             |
 */
export interface UALADSDevice_Base extends UADevice_Base {
    components?: UAComponentSet;
    /**
     * functionalUnitSet
     * Contains funtional units of this device.
     */
    functionalUnitSet: UAFunctionalUnitSet;
    identification: UALADSDevice_identification;
    operationCounters: UALADSOperationCounters;
    stateMachine: UALADSDeviceStateMachine;
    maintenance: UALADSDevice_maintenance;
    /**
     * revisionCounter
     * An incremental counter indicating the number of
     * times the static data within the Device has been
     * modified
     */
    revisionCounter: UAProperty<Int32, DataType.Int32>;
    /**
     * manufacturer
     * Name of the company that manufactured the device
     */
    manufacturer: UAProperty<LocalizedText, DataType.LocalizedText>;
    /**
     * model
     * Model name of the device
     */
    model: UAProperty<LocalizedText, DataType.LocalizedText>;
    /**
     * deviceManual
     * Address (pathname in the file system or a URL |
     * Web address) of user manual for the device
     */
    deviceManual: UAProperty<UAString, DataType.String>;
    /**
     * deviceRevision
     * Overall revision level of the device
     */
    deviceRevision: UAProperty<UAString, DataType.String>;
    /**
     * softwareRevision
     * Revision level of the software/firmware of the
     * device
     */
    softwareRevision: UAProperty<UAString, DataType.String>;
    /**
     * serialNumber
     * Identifier that uniquely identifies, within a
     * manufacturer, a device instance
     */
    serialNumber: UAProperty<UAString, DataType.String>;
    assetId: UAProperty<UAString, DataType.String>;
    componentName: UAProperty<LocalizedText, DataType.LocalizedText>;
    deviceClass?: UAProperty<UAString, DataType.String>;
    deviceHealth?: UABaseDataVariable<EnumDeviceHealth, DataType.Int32>;
    /**
     * hardwareRevision
     * Revision level of the hardware of the device
     */
    hardwareRevision: UAProperty<UAString, DataType.String>;
    manufacturerUri?: UAProperty<UAString, DataType.String>;
    productCode?: UAProperty<UAString, DataType.String>;
    productInstanceUri: UAProperty<UAString, DataType.String>;
    operationalLocation?: UAProperty<UAString, DataType.String>;
    hierarchicalLocation?: UAProperty<UAString, DataType.String>;
}
export interface UALADSDevice extends Omit<UADevice, "identification"|"revisionCounter"|"manufacturer"|"model"|"deviceManual"|"deviceRevision"|"softwareRevision"|"serialNumber"|"assetId"|"componentName"|"deviceClass"|"deviceHealth"|"hardwareRevision"|"manufacturerUri"|"productCode"|"productInstanceUri">, UALADSDevice_Base {
}