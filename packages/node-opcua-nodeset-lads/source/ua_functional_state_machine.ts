// ----- this file has been automatically generated - do not edit
import { UAMethod } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { NodeId } from "node-opcua-nodeid"
import { UAFiniteStateMachine, UAFiniteStateMachine_Base } from "node-opcua-nodeset-ua/source/ua_finite_state_machine"
import { UAState } from "node-opcua-nodeset-ua/source/ua_state"
import { UATransition } from "node-opcua-nodeset-ua/source/ua_transition"
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
import { UAInitialState } from "node-opcua-nodeset-ua/source/ua_initial_state"
import { UAStateVariable } from "node-opcua-nodeset-ua/source/ua_state_variable"
import { UARunningStateMachine } from "./ua_running_state_machine"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:FunctionalStateMachineType ns=4;i=1038          |
 * |isAbstract      |true                                              |
 */
export interface UAFunctionalStateMachine_Base extends UAFiniteStateMachine_Base {
    abort?: UAMethod;
    aborted: UAState;
    abortedToClearing: UATransition;
    aborting: UAState;
    abortingToAborted: UATransition;
    availableStates: UABaseDataVariable<NodeId[], DataType.NodeId>;
    availableTransitions: UABaseDataVariable<NodeId[], DataType.NodeId>;
    clear?: UAMethod;
    clearing: UAState;
    stopped: UAInitialState;
    running: UAState;
    stopping: UAState;
    stoppingToStopped: UATransition;
    stoppedToRunning: UATransition;
    runningToAborting: UATransition;
    clearingToStopped: UATransition;
    runningToStopping: UATransition;
    stop?: UAMethod;
    runningStateMachine?: UARunningStateMachine;
    currentState: UAStateVariable<LocalizedText>;
}
export interface UAFunctionalStateMachine extends Omit<UAFiniteStateMachine, "availableStates"|"availableTransitions"|"currentState">, UAFunctionalStateMachine_Base {
}