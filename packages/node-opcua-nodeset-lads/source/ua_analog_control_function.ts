// ----- this file has been automatically generated - do not edit
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { UAAnalogUnitRange } from "node-opcua-nodeset-ua/source/ua_analog_unit_range"
import { UABaseControlFunction_operational, UABaseControlFunction, UABaseControlFunction_Base } from "./ua_base_control_function"
export interface UAAnalogControlFunction_operational extends UABaseControlFunction_operational { // Object
      currentValue: UAAnalogUnitRange<number, DataType.Double>;
      targetValue: UAAnalogUnitRange<number, DataType.Double>;
}
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:AnalogControlFunctionType ns=4;i=1009           |
 * |isAbstract      |false                                             |
 */
export interface UAAnalogControlFunction_Base extends UABaseControlFunction_Base {
    currentValue: UAAnalogUnitRange<number, DataType.Double>;
    targetValue: UAAnalogUnitRange<number, DataType.Double>;
    operational: UAAnalogControlFunction_operational;
}
export interface UAAnalogControlFunction extends Omit<UABaseControlFunction, "operational">, UAAnalogControlFunction_Base {
}