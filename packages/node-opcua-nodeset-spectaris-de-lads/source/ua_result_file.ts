// ----- this file has been automatically generated - do not edit
import { UAObject, UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { UAString } from "node-opcua-basic-types"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:ResultFileType ns=3;i=1001                      |
 * |isAbstract      |false                                             |
 */
export interface UAResultFile_Base {
    mimeType: UAProperty<UAString, /*z*/DataType.String>;
    name: UAProperty<UAString, /*z*/DataType.String>;
    URL: UAProperty<UAString, /*z*/DataType.String>;
}
export interface UAResultFile extends UAObject, UAResultFile_Base {
}