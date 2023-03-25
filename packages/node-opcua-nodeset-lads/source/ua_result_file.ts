// ----- this file has been automatically generated - do not edit
import { UAObject, UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { UAString } from "node-opcua-basic-types"
import { UAFile } from "node-opcua-nodeset-ua/source/ua_file"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:ResultFileType ns=4;i=1001                      |
 * |isAbstract      |false                                             |
 */
export interface UAResultFile_Base {
    mimeType: UAProperty<UAString, DataType.String>;
    name: UAProperty<UAString, DataType.String>;
    URL?: UAProperty<UAString, DataType.String>;
    file?: UAFile;
}
export interface UAResultFile extends UAObject, UAResultFile_Base {
}