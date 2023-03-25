// ----- this file has been automatically generated - do not edit
import { DataType } from "node-opcua-variant"
import { UAAnalogUnitRange } from "node-opcua-nodeset-ua/source/ua_analog_unit_range"
import { UAAnalogSensorFunction, UAAnalogSensorFunction_Base } from "./ua_analog_sensor_function"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:AnalogSensorFunctionWithCompensationType ns=4;i=1000|
 * |isAbstract      |false                                             |
 */
export interface UAAnalogSensorFunctionWithCompensation_Base extends UAAnalogSensorFunction_Base {
    compensationValue: UAAnalogUnitRange<number, DataType.Double>;
}
export interface UAAnalogSensorFunctionWithCompensation extends UAAnalogSensorFunction, UAAnalogSensorFunctionWithCompensation_Base {
}