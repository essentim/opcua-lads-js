// ----- this file has been automatically generated - do not edit
import { UAMethod } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { EUInformation } from "node-opcua-data-access"
import { DTRange } from "node-opcua-nodeset-ua/source/dt_range"
import { UAFiniteStateVariable } from "node-opcua-nodeset-ua/source/ua_finite_state_variable"
import { UAAnalogUnitRange } from "node-opcua-nodeset-ua/source/ua_analog_unit_range"
import { UABaseControlFunction_operational, UABaseControlFunction, UABaseControlFunction_Base } from "./ua_base_control_function"
export interface UARatebasedAccumulatingControlFunction_operational extends UABaseControlFunction_operational { // Object
      currentState: UAFiniteStateVariable<LocalizedText>;
      start: UAMethod;
      currentValue?: UAAnalogUnitRange<number, DataType.Double>;
      deltaValue?: UAAnalogUnitRange<number, DataType.Double>;
      targetValue?: UAAnalogUnitRange<number, DataType.Double>;
}
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:RatebasedAccumulatingControlFunctionType ns=4;i=1015|
 * |isAbstract      |false                                             |
 */
export interface UARatebasedAccumulatingControlFunction_Base extends UABaseControlFunction_Base {
    operational: UARatebasedAccumulatingControlFunction_operational;
    currentValue?: UAAnalogUnitRange<number, DataType.Double>;
    deltaValue?: UAAnalogUnitRange<number, DataType.Double>;
    targetValue?: UAAnalogUnitRange<number, DataType.Double>;
    decreaseRate?: UAAnalogUnitRange<number, DataType.Double>;
    increaseRate?: UAAnalogUnitRange<number, DataType.Double>;
}
export interface UARatebasedAccumulatingControlFunction extends Omit<UABaseControlFunction, "operational">, UARatebasedAccumulatingControlFunction_Base {
}