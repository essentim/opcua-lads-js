// ----- this file has been automatically generated - do not edit
import { DataType, Variant } from "node-opcua-variant"
import { UAAnalogUnitRange } from "node-opcua-nodeset-ua/source/ua_analog_unit_range"
import { UAFunction_parameterSet } from "./ua_function"
import { UABaseControlFunction, UABaseControlFunction_Base } from "./ua_base_control_function"
export interface UAAnalogControlFunctionWithTotalizer_parameterSet extends UAFunction_parameterSet { // Object
      /**
       * currentValue
       * The current/actual process value.
       */
      currentValue?: UAAnalogUnitRange<any, any>;
      /**
       * targetValue
       * The targeted set-point value.
       */
      targetValue?: UAAnalogUnitRange<any, any>;
      /**
       * totalizedValue
       * Totalized process value. Maybe reset anytime
       * utilizing the ResetTotalizer() command.
       */
      totalizedValue?: UAAnalogUnitRange<any, any>;
}
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:AnalogControlFunctionWithTotalizerType ns=3;i=1014|
 * |isAbstract      |false                                             |
 */
export interface UAAnalogControlFunctionWithTotalizer_Base extends UABaseControlFunction_Base {
    /**
     * parameterSet
     * Flat list of Parameters
     */
    parameterSet: UAAnalogControlFunctionWithTotalizer_parameterSet;
}
export interface UAAnalogControlFunctionWithTotalizer extends Omit<UABaseControlFunction, "parameterSet">, UAAnalogControlFunctionWithTotalizer_Base {
}