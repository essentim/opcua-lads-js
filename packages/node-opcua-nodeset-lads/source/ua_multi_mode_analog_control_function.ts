// ----- this file has been automatically generated - do not edit
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { UInt32 } from "node-opcua-basic-types"
import { UAMultiStateDiscrete } from "node-opcua-nodeset-ua/source/ua_multi_state_discrete"
import { UABaseControlFunction_operational, UABaseControlFunction, UABaseControlFunction_Base } from "./ua_base_control_function"
import { UAControllerParameterSet } from "./ua_controller_parameter_set"
export interface UAMultiModeAnalogControlFunction_operational extends UABaseControlFunction_operational { // Object
      currentMode: UAMultiStateDiscrete<UInt32, DataType.UInt32>;
}
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:MultiModeAnalogControlFunctionType ns=4;i=1047  |
 * |isAbstract      |false                                             |
 */
export interface UAMultiModeAnalogControlFunction_Base extends UABaseControlFunction_Base {
    currentMode: UAMultiStateDiscrete<UInt32, DataType.UInt32>;
    operational: UAMultiModeAnalogControlFunction_operational;
    controllerModeSet: UAControllerParameterSet;
}
export interface UAMultiModeAnalogControlFunction extends Omit<UABaseControlFunction, "operational">, UAMultiModeAnalogControlFunction_Base {
}