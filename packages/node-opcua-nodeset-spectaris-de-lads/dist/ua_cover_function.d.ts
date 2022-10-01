import { UAMethod } from "node-opcua-address-space-base";
import { LocalizedText } from "node-opcua-data-model";
import { UAFiniteStateVariable } from "node-opcua-nodeset-ua/source/ua_finite_state_variable";
import { UAFunctionalGroup } from "node-opcua-nodeset-di/source/ua_functional_group";
import { UAFunction, UAFunction_Base } from "./ua_function";
import { UACoverStateMachine } from "./ua_cover_state_machine";
export interface UACoverFunction_operational extends UAFunctionalGroup {
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
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:CoverFunctionType ns=3;i=1011                   |
 * |isAbstract      |false                                             |
 */
export interface UACoverFunction_Base extends UAFunction_Base {
    operational: UACoverFunction_operational;
    stateMachine: UACoverStateMachine;
}
export interface UACoverFunction extends UAFunction, UACoverFunction_Base {
}
