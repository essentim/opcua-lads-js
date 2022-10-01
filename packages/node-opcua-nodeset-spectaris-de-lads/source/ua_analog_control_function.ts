// ----- this file has been automatically generated - do not edit
import { UAProperty } from "node-opcua-address-space-base"
import { DataType, Variant } from "node-opcua-variant"
import { EUInformation } from "node-opcua-data-access"
import { UAString } from "node-opcua-basic-types"
import { DTRange } from "node-opcua-nodeset-ua/source/dt_range"
import { UAAnalogUnitRange } from "node-opcua-nodeset-ua/source/ua_analog_unit_range"
import { UAFunction_parameterSet } from "./ua_function"
import { UABaseControlFunction, UABaseControlFunction_Base } from "./ua_base_control_function"
export interface UAAnalogControlFunction_parameterSet extends UAFunction_parameterSet { // Object
      /**
       * ctrlP
       * Proportional controller parameter.
       */
      ctrlP?: UAProperty<number, /*z*/DataType.Double>;
      /**
       * ctrlTd
       * Derivate comtroller parameter.
       */
      ctrlTd?: UAProperty<number, /*z*/DataType.Double>;
      /**
       * ctrlTi
       * Integrator controller parameter.
       */
      ctrlTi?: UAProperty<number, /*z*/DataType.Double>;
      /**
       * currentValue
       * The current/actual process value.
       */
      currentValue: UAAnalogUnitRange<any, any>;
      /**
       * targetValue
       * The targeted set-point value.
       */
      targetValue: UAAnalogUnitRange<any, any>;
}
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:AnalogControlFunctionType ns=3;i=1009           |
 * |isAbstract      |false                                             |
 */
export interface UAAnalogControlFunction_Base extends UABaseControlFunction_Base {
    /**
     * parameterSet
     * Flat list of Parameters
     */
    parameterSet: UAAnalogControlFunction_parameterSet;
}
export interface UAAnalogControlFunction extends Omit<UABaseControlFunction, "parameterSet">, UAAnalogControlFunction_Base {
}