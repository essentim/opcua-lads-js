// ----- this file has been automatically generated - do not edit
import { DataType } from "node-opcua-variant"
import { UAAnalogUnitRange } from "node-opcua-nodeset-ua/source/ua_analog_unit_range"
import { UAFunctionalGroup } from "node-opcua-nodeset-di/source/ua_functional_group"
import { UABaseSensorFunction, UABaseSensorFunction_Base } from "./ua_base_sensor_function"
export interface UAAnalogSensorFunction_operational extends UAFunctionalGroup { // Object
      sensorValue: UAAnalogUnitRange<number, DataType.Double>;
      rawValue: UAAnalogUnitRange<number, DataType.Double>;
}
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:AnalogSensorFunctionType ns=4;i=1016            |
 * |isAbstract      |false                                             |
 */
export interface UAAnalogSensorFunction_Base extends UABaseSensorFunction_Base {
    /**
     * operational
     * Used to organize parameters for operation of this
     * function.
     */
    operational: UAAnalogSensorFunction_operational;
    sensorValue: UAAnalogUnitRange<number, DataType.Double>;
    rawValue: UAAnalogUnitRange<number, DataType.Double>;
}
export interface UAAnalogSensorFunction extends Omit<UABaseSensorFunction, "operational">, UAAnalogSensorFunction_Base {
}