import { UAProperty } from "node-opcua-address-space-base";
import { DataType } from "node-opcua-variant";
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable";
import { UAAnalogUnitRange } from "node-opcua-nodeset-ua/source/ua_analog_unit_range";
import { UAFunction_parameterSet } from "./ua_function";
import { UABaseSensorFunction, UABaseSensorFunction_Base } from "./ua_base_sensor_function";
export interface UAAnalogSensorFunction_parameterSet extends UAFunction_parameterSet {
    /**
     * calibrationValues
     * Array of calibration values for converting the
     * senor's raw-value to the process value.
     */
    calibrationValues?: UABaseDataVariable<number[], /*z*/ DataType.Double>;
    /**
     * damping
     * Low pass filter paramter used for signal damping.
     */
    damping?: UAProperty<number, /*z*/ DataType.Double>;
    /**
     * rawValue
     * The raw-value measured at the sensor-element
     * e.g., Nernst voltage of a pH sensor element.
     */
    rawValue?: UAAnalogUnitRange<any, any>;
    /**
     * sensorValue
     * The calibrated and optionally compensated /
     * filtered process value.
     */
    sensorValue: UAAnalogUnitRange<any, any>;
}
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:AnalogSensorFunctionType ns=3;i=1016            |
 * |isAbstract      |false                                             |
 */
export interface UAAnalogSensorFunction_Base extends UABaseSensorFunction_Base {
    /**
     * parameterSet
     * Flat list of Parameters
     */
    parameterSet: UAAnalogSensorFunction_parameterSet;
}
export interface UAAnalogSensorFunction extends Omit<UABaseSensorFunction, "parameterSet">, UAAnalogSensorFunction_Base {
}
