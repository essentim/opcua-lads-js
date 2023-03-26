// ----- this file has been automatically generated - do not edit
import { UAMethod } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { UAAnalogUnitRange } from "node-opcua-nodeset-ua/source/ua_analog_unit_range"
import { UAAnalogControlFunction_operational, UAAnalogControlFunction, UAAnalogControlFunction_Base } from "./ua_analog_control_function"
export interface UAAnalogControlFunctionWithTotalizer_operational extends UAAnalogControlFunction_operational { // Object
      totalizedValue: UAAnalogUnitRange<number, DataType.Double>;
      resetTotalizer?: UAMethod;
}
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:AnalogControlFunctionWithTotalizerType ns=4;i=1014|
 * |isAbstract      |false                                             |
 */
export interface UAAnalogControlFunctionWithTotalizer_Base extends UAAnalogControlFunction_Base {
    operational: UAAnalogControlFunctionWithTotalizer_operational;
    totalizedValue: UAAnalogUnitRange<number, DataType.Double>;
    resetTotalizer?: UAMethod;
}
export interface UAAnalogControlFunctionWithTotalizer extends Omit<UAAnalogControlFunction, "operational">, UAAnalogControlFunctionWithTotalizer_Base {
}