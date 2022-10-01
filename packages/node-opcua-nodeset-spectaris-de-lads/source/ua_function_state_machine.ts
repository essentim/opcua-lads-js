// ----- this file has been automatically generated - do not edit
import { UAMethod } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { UInt32 } from "node-opcua-basic-types"
import { UAFiniteStateMachine, UAFiniteStateMachine_Base } from "node-opcua-nodeset-ua/source/ua_finite_state_machine"
import { UAState } from "node-opcua-nodeset-ua/source/ua_state"
import { UATransition } from "node-opcua-nodeset-ua/source/ua_transition"
/**
 * Simple function state machine.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:FunctionStateMachineType ns=3;i=1008            |
 * |isAbstract      |false                                             |
 */
export interface UAFunctionStateMachine_Base extends UAFiniteStateMachine_Base {
    /**
     * error
     * Function is in state Error.
     */
    error: UAState;
    errorToOff: UATransition;
    /**
     * idle
     * Function is in state Idle
     */
    idle: UAState;
    offToOn: UATransition;
    /**
     * executing
     * Function is in state Executing.
     */
    executing: UAState;
    onToError: UATransition;
    onToOff: UATransition;
    onToSuspend: UATransition;
    reset?: UAMethod;
    start: UAMethod;
    stop: UAMethod;
    suspend?: UAMethod;
    suspended: UAState;
    suspendToOn: UATransition;
    unsuspend?: UAMethod;
}
export interface UAFunctionStateMachine extends UAFiniteStateMachine, UAFunctionStateMachine_Base {
}