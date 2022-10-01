import { UAProperty } from "node-opcua-address-space-base";
import { DataType } from "node-opcua-variant";
import { UAExclusiveLevelAlarm } from "node-opcua-nodeset-ua/source/ua_exclusive_level_alarm";
import { UAFunctionalGroup } from "node-opcua-nodeset-di/source/ua_functional_group";
import { UAFunction, UAFunction_Base } from "./ua_function";
export interface UABaseSensorFunction_configuration extends UAFunctionalGroup {
    /**
     * isEnabled
     * Determnes whteher this function is currently
     * enabled (ready to be utilized).
     */
    isEnabled?: UAProperty<boolean, /*z*/ DataType.Boolean>;
}
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:BaseSensorFunctionType ns=3;i=1005              |
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
    operational?: UAFunctionalGroup;
    /**
     * tuning
     * Used to organize parameters for tuning of this
     * function.
     */
    tuning?: UAFunctionalGroup;
}
export interface UABaseSensorFunction extends Omit<UAFunction, "configuration">, UABaseSensorFunction_Base {
}
