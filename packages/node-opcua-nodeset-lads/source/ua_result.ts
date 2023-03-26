// ----- this file has been automatically generated - do not edit
import { UAObject, UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { UAString } from "node-opcua-basic-types"
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
import { UAResultFileSet } from "./ua_result_file_set"
import { UAProgramTemplate } from "./ua_program_template"
import { UAVariableSet } from "./ua_variable_set"
import { DTKeyValue } from "./dt_key_value"
/**
 * Results of a specific program run.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:ResultType ns=4;i=1021                          |
 * |isAbstract      |false                                             |
 */
export interface UAResult_Base {
    client: UAProperty<UAString, DataType.String>;
    "$description": UAProperty<LocalizedText, DataType.LocalizedText>;
    fileSet: UAResultFileSet;
    jobId: UAProperty<UAString, DataType.String>;
    name: UAProperty<UAString, DataType.String>;
    sampleIds: UAProperty<UAString[], DataType.String>;
    started: UAProperty<Date, DataType.DateTime>;
    stopped: UAProperty<Date, DataType.DateTime>;
    programTemplate: UAProgramTemplate;
    user: UAProperty<UAString, DataType.String>;
    variableSet: UAVariableSet;
    properties: UAProperty<DTKeyValue, DataType.ExtensionObject>;
    supervisoryTaskId?: UABaseDataVariable<UAString, DataType.String>;
    deviceProgramRunId?: UAProperty<UAString, DataType.String>;
    totalRuntime?: UAProperty<number, DataType.Double>;
    totalPauseTime?: UAProperty<number, DataType.Double>;
    estimateRuntime?: UAProperty<number, DataType.Double>;
}
export interface UAResult extends UAObject, UAResult_Base {
}