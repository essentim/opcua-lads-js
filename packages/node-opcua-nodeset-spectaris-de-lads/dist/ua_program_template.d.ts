import { UAObject, UAMethod, UAProperty } from "node-opcua-address-space-base";
import { DataType } from "node-opcua-variant";
import { LocalizedText } from "node-opcua-data-model";
import { UAString } from "node-opcua-basic-types";
/**
 * Program template
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:ProgramTemplateType ns=3;i=1018                 |
 * |isAbstract      |false                                             |
 */
export interface UAProgramTemplate_Base {
    author: UAProperty<LocalizedText, /*z*/ DataType.LocalizedText>;
    created: UAProperty<Date, /*z*/ DataType.DateTime>;
    "$description": UAProperty<LocalizedText, /*z*/ DataType.LocalizedText>;
    modified: UAProperty<Date, /*z*/ DataType.DateTime>;
    /**
     * name
     * The program template's name.
     */
    name: UAProperty<UAString, /*z*/ DataType.String>;
    select?: UAMethod;
    status: UAProperty<UAString, /*z*/ DataType.String>;
    type: UAProperty<UAString, /*z*/ DataType.String>;
    version: UAProperty<UAString, /*z*/ DataType.String>;
}
export interface UAProgramTemplate extends UAObject, UAProgramTemplate_Base {
}
