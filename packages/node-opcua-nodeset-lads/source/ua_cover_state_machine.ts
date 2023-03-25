// ----- this file has been automatically generated - do not edit
import { UAMethod } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { UInt32 } from "node-opcua-basic-types"
import { DTArgument } from "node-opcua-nodeset-ua/source/dt_argument"
import { UAFiniteStateMachine, UAFiniteStateMachine_Base } from "node-opcua-nodeset-ua/source/ua_finite_state_machine"
import { UAState } from "node-opcua-nodeset-ua/source/ua_state"
import { UATransition } from "node-opcua-nodeset-ua/source/ua_transition"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:CoverStateMachineType ns=4;i=1010               |
 * |isAbstract      |false                                             |
 */
export interface UACoverStateMachine_Base extends UAFiniteStateMachine_Base {
    close?: UAMethod;
    closed: UAState;
    error: UAState;
    lock?: UAMethod;
    locked: UAState;
    open?: UAMethod;
    opened: UAState;
    unlock?: UAMethod;
    openedToClosed: UATransition;
    closedToOpened: UATransition;
    closedToLocked: UATransition;
    lockedToClosed: UATransition;
    lockedToError: UATransition;
    closedToError: UATransition;
    errorToOpened: UATransition;
    reset?: UAMethod;
}
export interface UACoverStateMachine extends UAFiniteStateMachine, UACoverStateMachine_Base {
}