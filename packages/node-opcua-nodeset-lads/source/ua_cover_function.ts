// ----- this file has been automatically generated - do not edit
import { UAMethod } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { UAFiniteStateVariable } from "node-opcua-nodeset-ua/source/ua_finite_state_variable"
import { UAFunctionalGroup } from "node-opcua-nodeset-di/source/ua_functional_group"
import { UACoverStateMachine } from "./ua_cover_state_machine"
import { UAFunction, UAFunction_Base } from "./ua_function"
export interface UACoverFunction_operational extends UAFunctionalGroup { // Object
      currentState: UAFiniteStateVariable<LocalizedText>;
}
export interface UACoverFunction_stateMachine extends Omit<UACoverStateMachine, "close"|"currentState"|"lock"|"open"|"unlock"> { // Object
      close: UAMethod;
      currentState: UAFiniteStateVariable<LocalizedText>;
      lock: UAMethod;
      open: UAMethod;
      unlock: UAMethod;
}
/**
 * Controls a cover e.g., lid or door.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:CoverFunctionType ns=4;i=1011                   |
 * |isAbstract      |false                                             |
 */
export interface UACoverFunction_Base extends UAFunction_Base {
    operational: UACoverFunction_operational;
    stateMachine: UACoverFunction_stateMachine;
}
export interface UACoverFunction extends UAFunction, UACoverFunction_Base {
}