// ----- this file has been automatically generated - do not edit
import { DataType, Variant, VariantOptions } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { UInt32 } from "node-opcua-basic-types"
import { UADiscreteItem } from "node-opcua-nodeset-ua/source/ua_discrete_item"
import { UADiscreteControlFunction, UADiscreteControlFunction_Base } from "./ua_discrete_control_function"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:MultiStateDiscreteControlFunctionType ns=4;i=1045|
 * |isAbstract      |false                                             |
 */
export interface UAMultiStateDiscreteControlFunction_Base extends UADiscreteControlFunction_Base {
    currentValue: UADiscreteItem<UInt32, DataType.UInt32>;
    targetValue: UADiscreteItem<UInt32, DataType.UInt32>;
}
export interface UAMultiStateDiscreteControlFunction extends Omit<UADiscreteControlFunction, "currentValue"|"targetValue">, UAMultiStateDiscreteControlFunction_Base {
}