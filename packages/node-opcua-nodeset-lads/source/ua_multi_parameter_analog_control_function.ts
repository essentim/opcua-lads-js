// ----- this file has been automatically generated - do not edit
import { UABaseControlFunction, UABaseControlFunction_Base } from "./ua_base_control_function"
import { UAControllerParameterSet } from "./ua_controller_parameter_set"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:MultiParameterAnalogControlFunctionType ns=4;i=1050|
 * |isAbstract      |false                                             |
 */
export interface UAMultiParameterAnalogControlFunction_Base extends UABaseControlFunction_Base {
    controllerParameterSet: UAControllerParameterSet;
}
export interface UAMultiParameterAnalogControlFunction extends UABaseControlFunction, UAMultiParameterAnalogControlFunction_Base {
}