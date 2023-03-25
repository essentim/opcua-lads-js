// ----- this file has been automatically generated - do not edit
import { UAMethod } from "node-opcua-address-space-base"
import { UAFiniteStateMachine, UAFiniteStateMachine_Base } from "node-opcua-nodeset-ua/source/ua_finite_state_machine"
import { UAState } from "node-opcua-nodeset-ua/source/ua_state"
import { UATransition } from "node-opcua-nodeset-ua/source/ua_transition"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:RunningStateMachineType ns=4;i=1036             |
 * |isAbstract      |false                                             |
 */
export interface UARunningStateMachine_Base extends UAFiniteStateMachine_Base {
    complete: UAState;
    completing: UAState;
    execute: UAState;
    held: UAState;
    hold?: UAMethod;
    holding: UAState;
    idle: UAState;
    reset?: UAMethod;
    resetting: UAState;
    starting: UAState;
    suspend?: UAMethod;
    suspended: UAState;
    suspending: UAState;
    toComplete?: UAMethod;
    unhold?: UAMethod;
    unholding: UAState;
    unsuspend?: UAMethod;
    unsuspending: UAState;
    idleToStarting: UATransition;
    startingToExecute: UATransition;
    executeToCompleting: UATransition;
    completingToComplete: UATransition;
    completeToResetting: UATransition;
    resettingToIdle: UATransition;
    executeToSuspending: UATransition;
    suspendingToSuspended: UATransition;
    suspendedToUnsuspending: UATransition;
    unsuspendingToExecute: UATransition;
    executeToHolding: UATransition;
    holdingToHeld: UATransition;
    heldToUnholding: UATransition;
    unholdingToExecute: UATransition;
    suspendingToHolding: UATransition;
    startingToHolding: UATransition;
    suspendedToHolding: UATransition;
    unsuspendingToHolding: UATransition;
    unholdingToHolding: UATransition;
}
export interface UARunningStateMachine extends UAFiniteStateMachine, UARunningStateMachine_Base {
}