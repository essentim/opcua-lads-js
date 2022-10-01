import { UAObject, UAProperty } from "node-opcua-address-space-base";
import { DataType } from "node-opcua-variant";
import { LocalizedText } from "node-opcua-data-model";
import { UAString } from "node-opcua-basic-types";
import { UAResultFileSet } from "./ua_result_file_set";
import { UAProgramTemplate } from "./ua_program_template";
/**
 * Results of a specific program run.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:ResultType ns=3;i=1021                          |
 * |isAbstract      |false                                             |
 */
export interface UAResult_Base {
    client: UAProperty<UAString, /*z*/ DataType.String>;
    descrition: UAProperty<LocalizedText, /*z*/ DataType.LocalizedText>;
    fileSet: UAResultFileSet;
    jobId: UAProperty<UAString, /*z*/ DataType.String>;
    name: UAProperty<UAString, /*z*/ DataType.String>;
    sampleIds: UAProperty<UAString[], /*z*/ DataType.String>;
    started: UAProperty<Date, /*z*/ DataType.DateTime>;
    stopped: UAProperty<Date, /*z*/ DataType.DateTime>;
    template: UAProgramTemplate;
    user: UAProperty<UAString, /*z*/ DataType.String>;
    variableSet: UAObject;
}
export interface UAResult extends UAObject, UAResult_Base {
}
