// ----- this file has been automatically generated - do not edit
import { UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { UAString } from "node-opcua-basic-types"
import { UAFolder, UAFolder_Base } from "node-opcua-nodeset-ua/source/ua_folder"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:SetType ns=4;i=1041                             |
 * |isAbstract      |true                                              |
 */
export interface UASet_Base extends UAFolder_Base {
    nodeVersion: UAProperty<UAString, DataType.String>;
   // PlaceHolder for $SetElement$
}
export interface UASet extends UAFolder, UASet_Base {
}