// ----- this file has been automatically generated - do not edit
import { DataType } from "node-opcua-variant"
import { UAAnalogUnitRange } from "node-opcua-nodeset-ua/source/ua_analog_unit_range"
import { UAAnalogControlFunction, UAAnalogControlFunction_Base } from "./ua_analog_control_function"
import { UAVariableSet } from "./ua_variable_set"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:AnalogControlFunctionWithComposedTargetValueType ns=4;i=1052|
 * |isAbstract      |false                                             |
 */
export interface UAAnalogControlFunctionWithComposedTargetValue_Base extends UAAnalogControlFunction_Base {
    targetValue: UAAnalogUnitRange<number, DataType.Double>;
    targetValueSet: UAVariableSet;
}
export interface UAAnalogControlFunctionWithComposedTargetValue extends Omit<UAAnalogControlFunction, "targetValue">, UAAnalogControlFunctionWithComposedTargetValue_Base {
}