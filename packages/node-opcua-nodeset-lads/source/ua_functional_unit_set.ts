// ----- this file has been automatically generated - do not edit
import { DataType, VariantOptions } from "node-opcua-variant"
import { LocalizedText, QualifiedName } from "node-opcua-data-model"
import { NodeId } from "node-opcua-nodeid"
import { UInt64, UInt32, UInt16, UAString } from "node-opcua-basic-types"
import { DTArgument } from "node-opcua-nodeset-ua/source/dt_argument"
import { DTKeyValue } from "./dt_key_value"
import { UASet, UASet_Base } from "./ua_set"
/**
 * Set of Functional Units.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:FunctionalUnitSetType ns=4;i=1023               |
 * |isAbstract      |false                                             |
 */
export type UAFunctionalUnitSet_Base = UASet_Base;
export interface UAFunctionalUnitSet extends Omit<UASet, "$SetElement$">, UAFunctionalUnitSet_Base {
}