// ----- this file has been automatically generated - do not edit
import { UAMethod, UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { NodeId } from "node-opcua-nodeid"
import { StatusCode } from "node-opcua-status-code"
import { UInt32, UInt16, UAString } from "node-opcua-basic-types"
import { UAExclusiveDeviationAlarm } from "node-opcua-nodeset-ua/source/ua_exclusive_deviation_alarm"
import { UATwoStateVariable } from "node-opcua-nodeset-ua/source/ua_two_state_variable"
import { UAConditionVariable } from "node-opcua-nodeset-ua/source/ua_condition_variable"
import { UAExclusiveLimitStateMachine } from "node-opcua-nodeset-ua/source/ua_exclusive_limit_state_machine"
import { UAFiniteStateVariable } from "node-opcua-nodeset-ua/source/ua_finite_state_variable"
import { UAFunctionalGroup } from "node-opcua-nodeset-di/source/ua_functional_group"
import { UAControlFunctionStateMachine } from "./ua_control_function_state_machine"
import { UAFunction, UAFunction_Base } from "./ua_function"
import { UAControllerTuningParameter } from "./ua_controller_tuning_parameter"
export interface UABaseControlFunction_alarmMonitor extends Omit<UAExclusiveDeviationAlarm, "ackedState"|"acknowledge"|"activeState"|"addComment"|"branchId"|"clientUserId"|"comment"|"conditionClassId"|"conditionClassName"|"conditionName"|"disable"|"enable"|"enabledState"|"eventId"|"eventType"|"highHighLimit"|"highLimit"|"inputNode"|"lastSeverity"|"limitState"|"lowLimit"|"lowLowLimit"|"message"|"quality"|"receiveTime"|"retain"|"setpointNode"|"severity"|"sourceName"|"sourceNode"|"suppressedOrShelved"|"time"> { // Object
      ackedState: UATwoStateVariable<LocalizedText>;
      acknowledge: UAMethod;
      activeState: UATwoStateVariable<LocalizedText>;
      addComment: UAMethod;
      branchId: UAProperty<NodeId, DataType.NodeId>;
      clientUserId: UAProperty<UAString, DataType.String>;
      comment: UAConditionVariable<LocalizedText, DataType.LocalizedText>;
      conditionClassId: UAProperty<NodeId, DataType.NodeId>;
      conditionClassName: UAProperty<LocalizedText, DataType.LocalizedText>;
      conditionName: UAProperty<UAString, DataType.String>;
      disable: UAMethod;
      enable: UAMethod;
      enabledState: UATwoStateVariable<LocalizedText>;
      eventId: UAProperty<Buffer, DataType.ByteString>;
      eventType: UAProperty<NodeId, DataType.NodeId>;
      highHighLimit: UAProperty<number, DataType.Double>;
      highLimit: UAProperty<number, DataType.Double>;
      inputNode: UAProperty<NodeId, DataType.NodeId>;
      lastSeverity: UAConditionVariable<UInt16, DataType.UInt16>;
      limitState: UAExclusiveLimitStateMachine;
      lowLimit: UAProperty<number, DataType.Double>;
      lowLowLimit: UAProperty<number, DataType.Double>;
      message: UAProperty<LocalizedText, DataType.LocalizedText>;
      quality: UAConditionVariable<StatusCode, DataType.StatusCode>;
      receiveTime: UAProperty<Date, DataType.DateTime>;
      retain: UAProperty<boolean, DataType.Boolean>;
      setpointNode: UAProperty<NodeId, DataType.NodeId>;
      severity: UAProperty<UInt16, DataType.UInt16>;
      sourceName: UAProperty<UAString, DataType.String>;
      sourceNode: UAProperty<NodeId, DataType.NodeId>;
      suppressedOrShelved: UAProperty<boolean, DataType.Boolean>;
      time: UAProperty<Date, DataType.DateTime>;
}
export interface UABaseControlFunction_operational extends UAFunctionalGroup { // Object
      currentState: UAFiniteStateVariable<LocalizedText>;
      reset?: UAMethod;
      start: UAMethod;
      stop: UAMethod;
}
export interface UABaseControlFunction_stateMachine extends Omit<UAControlFunctionStateMachine, "currentState"|"start"|"stop"> { // Object
      currentState: UAFiniteStateVariable<LocalizedText>;
      reset?: UAMethod;
      start: UAMethod;
      stop: UAMethod;
}
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:BaseControlFunctionType ns=4;i=1007             |
 * |isAbstract      |true                                              |
 */
export interface UABaseControlFunction_Base extends UAFunction_Base {
    alarmMonitor?: UABaseControlFunction_alarmMonitor;
    operational: UABaseControlFunction_operational;
    stateMachine: UABaseControlFunction_stateMachine;
    contollerTuningParameter?: UAControllerTuningParameter;
}
export interface UABaseControlFunction extends UAFunction, UABaseControlFunction_Base {
}