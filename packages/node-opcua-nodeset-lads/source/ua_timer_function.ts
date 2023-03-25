// ----- this file has been automatically generated - do not edit
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { UAAnalogUnitRange } from "node-opcua-nodeset-ua/source/ua_analog_unit_range"
import { UABaseControlFunction_operational, UABaseControlFunction, UABaseControlFunction_Base } from "./ua_base_control_function"
export interface UATimerFunction_operational extends UABaseControlFunction_operational { // Object
      differenceValue?: UAAnalogUnitRange<number, DataType.Double>;
}
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:TimerFunctionType ns=4;i=1013                   |
 * |isAbstract      |false                                             |
 */
export interface UATimerFunction_Base extends UABaseControlFunction_Base {
    differenceValue?: UAAnalogUnitRange<number, DataType.Double>;
    targetValue?: UAAnalogUnitRange<number, DataType.Double>;
    currentValue?: UAAnalogUnitRange<number, DataType.Double>;
    operational: UATimerFunction_operational;
}
export interface UATimerFunction extends Omit<UABaseControlFunction, "operational">, UATimerFunction_Base {
}