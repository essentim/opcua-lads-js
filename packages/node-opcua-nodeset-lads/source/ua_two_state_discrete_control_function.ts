// ----- this file has been automatically generated - do not edit
import { DataType, VariantOptions } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { UADiscreteItem } from "node-opcua-nodeset-ua/source/ua_discrete_item"
import { UADiscreteControlFunction, UADiscreteControlFunction_Base } from "./ua_discrete_control_function"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:TwoStateDiscreteControlFunctionType ns=4;i=1042 |
 * |isAbstract      |false                                             |
 */
export interface UATwoStateDiscreteControlFunction_Base extends UADiscreteControlFunction_Base {
    currentValue: UADiscreteItem<boolean>;
    targetValue: UADiscreteItem<boolean>;
}
export interface UATwoStateDiscreteControlFunction extends Omit<UADiscreteControlFunction, "currentValue"|"targetValue">, UATwoStateDiscreteControlFunction_Base {
}