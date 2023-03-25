// ----- this file has been automatically generated - do not edit
import { UAObject, UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { UAString } from "node-opcua-basic-types"
/**
 * Program template
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:ProgramTemplateType ns=4;i=1018                 |
 * |isAbstract      |false                                             |
 */
export interface UAProgramTemplate_Base {
    author: UAProperty<LocalizedText, DataType.LocalizedText>;
    created: UAProperty<Date, DataType.DateTime>;
    "$description": UAProperty<LocalizedText, DataType.LocalizedText>;
    modified: UAProperty<Date, DataType.DateTime>;
    /**
     * name
     * The program template's name.
     */
    name: UAProperty<UAString, DataType.String>;
    status: UAProperty<UAString, DataType.String>;
    version: UAProperty<UAString, DataType.String>;
    templateId: UAProperty<UAString, DataType.String>;
}
export interface UAProgramTemplate extends UAObject, UAProgramTemplate_Base {
}