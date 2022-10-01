import { UAMethod } from "node-opcua-address-space-base";
import { UAFiniteStateMachine, UAFiniteStateMachine_Base } from "node-opcua-nodeset-ua/source/ua_finite_state_machine";
import { UAState } from "node-opcua-nodeset-ua/source/ua_state";
import { UATransition } from "node-opcua-nodeset-ua/source/ua_transition";
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:CoverStateMachineType ns=3;i=1010               |
 * |isAbstract      |false                                             |
 */
export interface UACoverStateMachine_Base extends UAFiniteStateMachine_Base {
    close: UAMethod;
    closed: UAState;
    closedToLocked: UATransition;
    closedToOpen: UATransition;
    error: UAState;
    lock: UAMethod;
    locked: UAState;
    lockedToClosed: UATransition;
    open: UAMethod;
    opened: UAState;
    openToClosed: UATransition;
    unlock: UAMethod;
}
export interface UACoverStateMachine extends UAFiniteStateMachine, UACoverStateMachine_Base {
}
