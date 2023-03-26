// ----- this file has been automatically generated - do not edit
import { DataType, Variant, VariantOptions } from "node-opcua-variant"
import { EUInformation } from "node-opcua-data-access"
import { DTRange } from "node-opcua-nodeset-ua/source/dt_range"
import { UAVariableSet, UAVariableSet_Base } from "./ua_variable_set"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:SensorValueSetType ns=4;i=1055                  |
 * |isAbstract      |false                                             |
 */
export type UASensorValueSet_Base = UAVariableSet_Base;
export interface UASensorValueSet extends Omit<UAVariableSet, "$VariableSetElement$">, UASensorValueSet_Base {
}