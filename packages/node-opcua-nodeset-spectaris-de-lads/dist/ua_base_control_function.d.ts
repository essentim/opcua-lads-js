/// <reference types="node" />
import { UAMethod, UAProperty } from "node-opcua-address-space-base";
import { DataType } from "node-opcua-variant";
import { LocalizedText } from "node-opcua-data-model";
import { NodeId } from "node-opcua-nodeid";
import { StatusCode } from "node-opcua-status-code";
import { UInt16, UAString } from "node-opcua-basic-types";
import { UAExclusiveDeviationAlarm } from "node-opcua-nodeset-ua/source/ua_exclusive_deviation_alarm";
import { UATwoStateVariable } from "node-opcua-nodeset-ua/source/ua_two_state_variable";
import { UAConditionVariable } from "node-opcua-nodeset-ua/source/ua_condition_variable";
import { UAExclusiveLimitStateMachine } from "node-opcua-nodeset-ua/source/ua_exclusive_limit_state_machine";
import { UAFiniteStateVariable } from "node-opcua-nodeset-ua/source/ua_finite_state_variable";
import { UAFunctionalGroup } from "node-opcua-nodeset-di/source/ua_functional_group";
import { UAFunction, UAFunction_Base } from "./ua_function";
import { UAFunctionStateMachine } from "./ua_function_state_machine";
export interface UABaseControlFunction_alarmMonitor extends Omit<UAExclusiveDeviationAlarm, "ackedState" | "acknowledge" | "activeState" | "addComment" | "branchId" | "clientUserId" | "comment" | "conditionClassId" | "conditionClassName" | "conditionName" | "disable" | "enable" | "enabledState" | "eventId" | "eventType" | "highHighLimit" | "highLimit" | "inputNode" | "lastSeverity" | "limitState" | "lowLimit" | "lowLowLimit" | "message" | "quality" | "receiveTime" | "retain" | "setpointNode" | "severity" | "sourceName" | "sourceNode" | "suppressedOrShelved" | "time"> {
    ackedState: UATwoStateVariable<LocalizedText>;
    acknowledge: UAMethod;
    activeState: UATwoStateVariable<LocalizedText>;
    addComment: UAMethod;
    branchId: UAProperty<NodeId, /*z*/ DataType.NodeId>;
    clientUserId: UAProperty<UAString, /*z*/ DataType.String>;
    comment: UAConditionVariable<LocalizedText, /*z*/ DataType.LocalizedText>;
    conditionClassId: UAProperty<NodeId, /*z*/ DataType.NodeId>;
    conditionClassName: UAProperty<LocalizedText, /*z*/ DataType.LocalizedText>;
    conditionName: UAProperty<UAString, /*z*/ DataType.String>;
    disable: UAMethod;
    enable: UAMethod;
    enabledState: UATwoStateVariable<LocalizedText>;
    eventId: UAProperty<Buffer, /*z*/ DataType.ByteString>;
    eventType: UAProperty<NodeId, /*z*/ DataType.NodeId>;
    highHighLimit: UAProperty<number, /*z*/ DataType.Double>;
    highLimit: UAProperty<number, /*z*/ DataType.Double>;
    inputNode: UAProperty<NodeId, /*z*/ DataType.NodeId>;
    lastSeverity: UAConditionVariable<UInt16, /*z*/ DataType.UInt16>;
    limitState: UAExclusiveLimitStateMachine;
    lowLimit: UAProperty<number, /*z*/ DataType.Double>;
    lowLowLimit: UAProperty<number, /*z*/ DataType.Double>;
    message: UAProperty<LocalizedText, /*z*/ DataType.LocalizedText>;
    quality: UAConditionVariable<StatusCode, /*z*/ DataType.StatusCode>;
    receiveTime: UAProperty<Date, /*z*/ DataType.DateTime>;
    retain: UAProperty<boolean, /*z*/ DataType.Boolean>;
    setpointNode: UAProperty<NodeId, /*z*/ DataType.NodeId>;
    severity: UAProperty<UInt16, /*z*/ DataType.UInt16>;
    sourceName: UAProperty<UAString, /*z*/ DataType.String>;
    sourceNode: UAProperty<NodeId, /*z*/ DataType.NodeId>;
    suppressedOrShelved: UAProperty<boolean, /*z*/ DataType.Boolean>;
    time: UAProperty<Date, /*z*/ DataType.DateTime>;
}
export interface UABaseControlFunction_operational extends UAFunctionalGroup {
    currentState: UAFiniteStateVariable<LocalizedText>;
    reset?: UAMethod;
    start: UAMethod;
    stop: UAMethod;
}
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:BaseControlFunctionType ns=3;i=1007             |
 * |isAbstract      |true                                              |
 */
export interface UABaseControlFunction_Base extends UAFunction_Base {
    alarmMonitor?: UABaseControlFunction_alarmMonitor;
    operational: UABaseControlFunction_operational;
    stateMachine: UAFunctionStateMachine;
    tuning?: UAFunctionalGroup;
}
export interface UABaseControlFunction extends UAFunction, UABaseControlFunction_Base {
}
