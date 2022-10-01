import { UAObject, UAMethod, UAProperty } from "node-opcua-address-space-base";
import { DataType } from "node-opcua-variant";
import { UAString } from "node-opcua-basic-types";
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:TaskType ns=3;i=1028                            |
 * |isAbstract      |false                                             |
 */
export interface UATask_Base {
    execute: UAMethod;
    lastExecution: UAProperty<Date, /*z*/ DataType.DateTime>;
    lastResult: UAProperty<UAString, /*z*/ DataType.String>;
}
export interface UATask extends UAObject, UATask_Base {
}
