// ----- this file has been automatically generated - do not edit
import { UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { NodeId } from "node-opcua-nodeid"
import { StatusCode } from "node-opcua-status-code"
import { UInt16, UAString } from "node-opcua-basic-types"
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
import { UAExclusiveLevelAlarm } from "node-opcua-nodeset-ua/source/ua_exclusive_level_alarm"
import { UAFunctionalGroup } from "node-opcua-nodeset-di/source/ua_functional_group"
import { UAFunction, UAFunction_Base } from "./ua_function"
export interface UABaseSensorFunction_configuration extends UAFunctionalGroup { // Object
      /**
       * isEnabled
       * Determnes whteher this function is currently
       * enabled (ready to be utilized).
       */
      isEnabled?: UAProperty<boolean, DataType.Boolean>;
}
export interface UABaseSensorFunction_calibration extends UAFunctionalGroup { // Object
      calibrationValues?: UABaseDataVariable<number[], DataType.Double>;
}
export interface UABaseSensorFunction_tuning extends UAFunctionalGroup { // Object
      damping?: UAProperty<number, DataType.Double>;
}
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:BaseSensorFunctionType ns=4;i=1005              |
 * |isAbstract      |true                                              |
 */
export interface UABaseSensorFunction_Base extends UAFunction_Base {
    alarmMonitor?: UAExclusiveLevelAlarm;
    /**
     * configuration
     * Used to organize parameters for configuration of
     * this function.
     */
    configuration?: UABaseSensorFunction_configuration;
    /**
     * operational
     * Used to organize parameters for operation of this
     * function.
     */
    operational: UAFunctionalGroup;
    calibrationValues?: UABaseDataVariable<number[], DataType.Double>;
    damping?: UAProperty<number, DataType.Double>;
    /**
     * calibration
     * Used to organize parameters for configuration of
     * this function.
     */
    calibration: UABaseSensorFunction_calibration;
    /**
     * tuning
     * Used to organize parameters for operation of this
     * function.
     */
    tuning?: UABaseSensorFunction_tuning;
}
export interface UABaseSensorFunction extends Omit<UAFunction, "configuration">, UABaseSensorFunction_Base {
}