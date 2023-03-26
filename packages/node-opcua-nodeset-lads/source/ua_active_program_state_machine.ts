// ----- this file has been automatically generated - do not edit
import { UAMethod } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { DTArgument } from "node-opcua-nodeset-ua/source/dt_argument"
import { UAFunctionalStateMachine, UAFunctionalStateMachine_Base } from "./ua_functional_state_machine"
/**
 * Represents the state of the currently active
 * program in a LADS Device
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:ActiveProgramStateMachineType ns=4;i=1046       |
 * |isAbstract      |false                                             |
 */
export interface UAActiveProgramStateMachine_Base extends UAFunctionalStateMachine_Base {
    start?: UAMethod;
}
export interface UAActiveProgramStateMachine extends UAFunctionalStateMachine, UAActiveProgramStateMachine_Base {
}