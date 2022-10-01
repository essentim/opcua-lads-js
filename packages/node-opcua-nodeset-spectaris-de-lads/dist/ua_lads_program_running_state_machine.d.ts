import { UAMethod } from "node-opcua-address-space-base";
import { DataType } from "node-opcua-variant";
import { NodeId } from "node-opcua-nodeid";
import { UAFiniteStateMachine, UAFiniteStateMachine_Base } from "node-opcua-nodeset-ua/source/ua_finite_state_machine";
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable";
import { UAState } from "node-opcua-nodeset-ua/source/ua_state";
import { UATransition } from "node-opcua-nodeset-ua/source/ua_transition";
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:LADSProgramRunningStateMachineType ns=3;i=1036  |
 * |isAbstract      |false                                             |
 */
export interface UALADSProgramRunningStateMachine_Base extends UAFiniteStateMachine_Base {
    availableStates: UABaseDataVariable<NodeId[], /*z*/ DataType.NodeId>;
    availableTransitions: UABaseDataVariable<NodeId[], /*z*/ DataType.NodeId>;
    complete: UAState;
    completeToResetting: UATransition;
    completing: UAState;
    completingToComplete: UATransition;
    execute: UAState;
    executeToCompleting: UATransition;
    executeToHolding: UATransition;
    executeToSuspending: UATransition;
    held: UAState;
    heldToUnholding: UATransition;
    hold?: UAMethod;
    holding: UAState;
    holdingToHeld: UATransition;
    idle: UAState;
    idleToStarting: UATransition;
    reset?: UAMethod;
    resetting: UAState;
    resettingToIdle: UATransition;
    start?: UAMethod;
    starting: UAState;
    startingToExecute: UATransition;
    startingToHolding: UATransition;
    suspend?: UAMethod;
    suspended: UAState;
    suspendedToHolding: UATransition;
    suspendedToUnsuspending: UATransition;
    suspending: UAState;
    suspendingToHolding: UATransition;
    suspendingToSuspended: UATransition;
    toComplete?: UAMethod;
    unhold?: UAMethod;
    unholding: UAState;
    unholdingToExecute: UATransition;
    unholdingToHolding: UATransition;
    unsuspend?: UAMethod;
    unsuspending: UAState;
    unsuspendingToExecute: UATransition;
    unsuspendingToHolding: UATransition;
}
export interface UALADSProgramRunningStateMachine extends Omit<UAFiniteStateMachine, "availableStates" | "availableTransitions">, UALADSProgramRunningStateMachine_Base {
}
