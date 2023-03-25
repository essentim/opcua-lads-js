// ----- this file has been automatically generated - do not edit
import { UAProperty } from "node-opcua-address-space-base"
import { DataType, VariantOptions } from "node-opcua-variant"
import { UAString } from "node-opcua-basic-types"
import { UAFolder, UAFolder_Base } from "node-opcua-nodeset-ua/source/ua_folder"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:VariableSetType ns=4;i=61                       |
 * |isAbstract      |false                                             |
 */
export interface UAVariableSet_Base extends UAFolder_Base {
   // PlaceHolder for $VariableSetElement$
   // PlaceHolder for $Data$
    nodeVersion: UAProperty<UAString, DataType.String>;
}
export interface UAVariableSet extends UAFolder, UAVariableSet_Base {
}