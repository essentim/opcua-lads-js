// ----- this file has been automatically generated - do not edit
import { DataType } from "node-opcua-variant"
import { UAAnalogUnitRange } from "node-opcua-nodeset-ua/source/ua_analog_unit_range"
import { UAFunctionalGroup } from "node-opcua-nodeset-di/source/ua_functional_group"
import { UABaseSensorFunction, UABaseSensorFunction_Base } from "./ua_base_sensor_function"
export interface UAAnalogSensorArrayFunction_operational extends UAFunctionalGroup { // Object
      /**
       * rawValue
       * Array of calibrated and optionally compensated /
       * filtered process values.
       */
      rawValue: UAAnalogUnitRange<number, DataType.Double>;
      sensorValue: UAAnalogUnitRange<number, DataType.Double>;
}
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:AnalogSensorArrayFunctionType ns=4;i=1029       |
 * |isAbstract      |false                                             |
 */
export interface UAAnalogSensorArrayFunction_Base extends UABaseSensorFunction_Base {
    /**
     * operational
     * Used to organize parameters for operation of this
     * function.
     */
    operational: UAAnalogSensorArrayFunction_operational;
    /**
     * rawValue
     * Array of calibrated and optionally compensated /
     * filtered process values.
     */
    rawValue: UAAnalogUnitRange<number, DataType.Double>;
    sensorValue: UAAnalogUnitRange<number, DataType.Double>;
}
export interface UAAnalogSensorArrayFunction extends Omit<UABaseSensorFunction, "operational">, UAAnalogSensorArrayFunction_Base {
}