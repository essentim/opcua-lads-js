// ----- this file has been automatically generated - do not edit
import { UAObject, UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { UAString } from "node-opcua-basic-types"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:SupplyType ns=3;i=1030                          |
 * |isAbstract      |false                                             |
 */
export interface UASupply_Base {
    name: UAProperty<UAString, /*z*/DataType.String>;
}
export interface UASupply extends UAObject, UASupply_Base {
}