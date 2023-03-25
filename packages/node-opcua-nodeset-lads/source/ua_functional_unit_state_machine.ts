// ----- this file has been automatically generated - do not edit
import { UAMethod } from "node-opcua-address-space-base"
import { UAFunctionalStateMachine, UAFunctionalStateMachine_Base } from "./ua_functional_state_machine"
/**
 * Represents the state of a FunctionalUnit in a
 * LADS Device
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:FunctionalUnitStateMachineType ns=4;i=1043      |
 * |isAbstract      |false                                             |
 */
export interface UAFunctionalUnitStateMachine_Base extends UAFunctionalStateMachine_Base {
    start?: UAMethod;
    startProgram?: UAMethod;
}
export interface UAFunctionalUnitStateMachine extends UAFunctionalStateMachine, UAFunctionalUnitStateMachine_Base {
}