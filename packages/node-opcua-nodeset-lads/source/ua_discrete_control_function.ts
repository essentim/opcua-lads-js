// ----- this file has been automatically generated - do not edit
import { DataType, VariantOptions } from "node-opcua-variant"
import { UADiscreteItem } from "node-opcua-nodeset-ua/source/ua_discrete_item"
import { UABaseControlFunction, UABaseControlFunction_Base } from "./ua_base_control_function"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:DiscreteControlFunctionType ns=4;i=1017         |
 * |isAbstract      |true                                              |
 */
export interface UADiscreteControlFunction_Base extends UABaseControlFunction_Base {
    currentValue: UADiscreteItem<any, any>;
    targetValue: UADiscreteItem<any, any>;
}
export interface UADiscreteControlFunction extends UABaseControlFunction, UADiscreteControlFunction_Base {
}