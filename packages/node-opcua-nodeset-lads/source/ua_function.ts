// ----- this file has been automatically generated - do not edit
import { UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { UATopologyElement, UATopologyElement_Base } from "node-opcua-nodeset-di/source/ua_topology_element"
import { UAFunctionalGroup } from "node-opcua-nodeset-di/source/ua_functional_group"
import { UAFunctionSet } from "./ua_function_set"
/**
 * Abstract function type
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:FunctionType ns=4;i=1004                        |
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
    isEnabled: UAProperty<boolean, DataType.Boolean>;
}
export interface UAFunction extends UATopologyElement, UAFunction_Base {
}