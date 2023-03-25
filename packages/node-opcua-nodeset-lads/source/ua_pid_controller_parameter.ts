// ----- this file has been automatically generated - do not edit
import { DataType } from "node-opcua-variant"
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
import { UAAnalogUnitRange } from "node-opcua-nodeset-ua/source/ua_analog_unit_range"
import { UAControllerTuningParameter, UAControllerTuningParameter_Base } from "./ua_controller_tuning_parameter"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:PidControllerParameterType ns=4;i=1030          |
 * |isAbstract      |false                                             |
 */
export interface UAPidControllerParameter_Base extends UAControllerTuningParameter_Base {
    ctrlP?: UABaseDataVariable<number[], DataType.Double>;
    ctrlTd?: UAAnalogUnitRange<number, DataType.Double>;
    ctrlTi?: UAAnalogUnitRange<number, DataType.Double>;
}
export interface UAPidControllerParameter extends UAControllerTuningParameter, UAPidControllerParameter_Base {
}