import { UABaseControlFunction, UABaseControlFunction_Base } from "./ua_base_control_function";
import { UAFunctionStateMachine } from "./ua_function_state_machine";
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:DiscreteControlFunctionType ns=3;i=1032         |
 * |isAbstract      |false                                             |
 */
export interface UADiscreteControlFunction_Base extends UABaseControlFunction_Base {
    stateMachine: UAFunctionStateMachine;
}
export interface UADiscreteControlFunction extends Omit<UABaseControlFunction, "stateMachine">, UADiscreteControlFunction_Base {
}
