// ----- this file has been automatically generated - do not edit
import { DataType, Variant } from "node-opcua-variant"
import { UAAnalogUnitRange } from "node-opcua-nodeset-ua/source/ua_analog_unit_range"
import { UAFunction_parameterSet } from "./ua_function"
import { UABaseSensorFunction, UABaseSensorFunction_Base } from "./ua_base_sensor_function"
export interface UAAnalogSensorFunctionWithCompensation_parameterSet extends UAFunction_parameterSet { // Object
      compensationValue: UAAnalogUnitRange<any, any>;
      rawValue: UAAnalogUnitRange<any, any>;
      sensorValue: UAAnalogUnitRange<any, any>;
}
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:AnalogSensorFunctionWithCompensationType ns=3;i=1017|
 * |isAbstract      |false                                             |
 */
export interface UAAnalogSensorFunctionWithCompensation_Base extends UABaseSensorFunction_Base {
    /**
     * parameterSet
     * Flat list of Parameters
     */
    parameterSet: UAAnalogSensorFunctionWithCompensation_parameterSet;
}
export interface UAAnalogSensorFunctionWithCompensation extends Omit<UABaseSensorFunction, "parameterSet">, UAAnalogSensorFunctionWithCompensation_Base {
}