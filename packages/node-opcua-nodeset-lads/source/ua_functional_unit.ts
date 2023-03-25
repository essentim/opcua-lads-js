// ----- this file has been automatically generated - do not edit
import { UAMethod, UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { UAString } from "node-opcua-basic-types"
import { UAFiniteStateVariable } from "node-opcua-nodeset-ua/source/ua_finite_state_variable"
import { UAFunctionalGroup } from "node-opcua-nodeset-di/source/ua_functional_group"
import { UATopologyElement, UATopologyElement_Base } from "node-opcua-nodeset-di/source/ua_topology_element"
import { UALockingServices } from "node-opcua-nodeset-di/source/ua_locking_services"
import { UAFunctionSet } from "./ua_function_set"
import { UAProgramManager } from "./ua_program_manager"
import { UASupportedPropertiesSetType  } from "./ua_supported_properties_set_type"
import { UAFunctionalUnitStateMachine } from "./ua_functional_unit_state_machine"
export interface UAFunctionalUnit_identification extends UAFunctionalGroup { // Object
      assetId?: UAProperty<UAString, DataType.String>;
      componentName?: UAProperty<LocalizedText, DataType.LocalizedText>;
}
export interface UAFunctionalUnit_operational extends UAFunctionalGroup { // Object
      clear?: UAMethod;
      start?: UAMethod;
      startProgram?: UAMethod;
      stop?: UAMethod;
      abort?: UAMethod;
      hold?: UAMethod;
      reset?: UAMethod;
      suspend?: UAMethod;
      unhold?: UAMethod;
      unsuspend?: UAMethod;
      currentState: UAFiniteStateVariable<LocalizedText>;
      effectiveDisplayName: UAProperty<LocalizedText, DataType.LocalizedText>;
}
/**
 * Represents a functional unit of a laboratory- or
 * anlytical device.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:FunctionalUnitType ns=4;i=1003                  |
 * |isAbstract      |false                                             |
 */
export interface UAFunctionalUnit_Base extends UATopologyElement_Base {
    /**
     * functionSet
     * Contains funtions of this functional unit.
     */
    functionSet: UAFunctionSet;
    /**
     * identification
     * Used to organize parameters for identification of
     * this functional unit.
     */
    identification?: UAFunctionalUnit_identification;
    /**
     * lock
     * Used to lock the topology element.
     */
    lock: UALockingServices;
    /**
     * programManager
     * Manages programs and results of the
     * functional-unit.
     */
    programManager?: UAProgramManager;
    supportedPropertiesSet?: UASupportedPropertiesSetType ;
    stateMachine: UAFunctionalUnitStateMachine;
    assetId?: UAProperty<UAString, DataType.String>;
    componentName?: UAProperty<LocalizedText, DataType.LocalizedText>;
    operational?: UAFunctionalUnit_operational;
}
export interface UAFunctionalUnit extends Omit<UATopologyElement, "identification"|"lock">, UAFunctionalUnit_Base {
}