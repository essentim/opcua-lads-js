// ----- this file has been automatically generated - do not edit
import { UAObject, UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { UATopologyElement, UATopologyElement_Base } from "node-opcua-nodeset-di/source/ua_topology_element"
import { UAFunctionalGroup } from "node-opcua-nodeset-di/source/ua_functional_group"
import { UAFunctionSet } from "./ua_function_set"
export interface UAFunction_parameterSet extends UAObject { // Object
      /**
       * isEnabled
       * Determnes whteher this function is currently
       * enabled (ready to be utilized).
       */
      isEnabled?: UAProperty<boolean, /*z*/DataType.Boolean>;
}
/**
 * Abstract function type
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:FunctionType ns=3;i=1004                        |
 * |isAbstract      |true                                              |
 */
export interface UAFunction_Base extends UATopologyElement_Base {
    /**
     * configuration
     * Used to organize parameters for configuration of
     * this function.
     */
    configuration?: UAFunctionalGroup;
    /**
     * functionSet
     * Contains sub-funtions of this function.
     */
    functionSet?: UAFunctionSet;
    /**
     * parameterSet
     * Flat list of Parameters
     */
    parameterSet?: UAFunction_parameterSet;
}
export interface UAFunction extends Omit<UATopologyElement, "parameterSet">, UAFunction_Base {
}