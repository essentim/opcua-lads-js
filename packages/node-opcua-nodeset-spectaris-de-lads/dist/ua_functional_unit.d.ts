import { UAObject, UAMethod, UAProperty } from "node-opcua-address-space-base";
import { DataType } from "node-opcua-variant";
import { LocalizedText } from "node-opcua-data-model";
import { UAString } from "node-opcua-basic-types";
import { UAFunctionalGroup } from "node-opcua-nodeset-di/source/ua_functional_group";
import { UATopologyElement, UATopologyElement_Base } from "node-opcua-nodeset-di/source/ua_topology_element";
import { UALockingServices } from "node-opcua-nodeset-di/source/ua_locking_services";
import { UAFunctionSet } from "./ua_function_set";
import { UAProgramManager } from "./ua_program_manager";
import { UAPropertySet } from "./ua_property_set";
export interface UAFunctionalUnit_identification extends UAFunctionalGroup {
    /**
     * assetId
     * Unique id of the asset.
     */
    assetId?: UAProperty<UAString, /*z*/ DataType.String>;
    /**
     * componentName
     * User defined nicknae of the functional unit.
     */
    componentName: UAProperty<LocalizedText, /*z*/ DataType.LocalizedText>;
}
export interface UAFunctionalUnit_methodSet extends UAObject {
    startFunctions: UAMethod;
    stopFunctions: UAMethod;
}
export interface UAFunctionalUnit_operational extends UAFunctionalGroup {
    startFunctions: UAMethod;
    stopFunctions: UAMethod;
}
/**
 * Represents a functional unit of a laboratory- or
 * anlytical device.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:FunctionalUnitType ns=3;i=1003                  |
 * |isAbstract      |false                                             |
 */
export interface UAFunctionalUnit_Base extends UATopologyElement_Base {
    /**
     * assetId
     * Unique id of the asset.
     */
    assetId?: UAProperty<UAString, /*z*/ DataType.String>;
    /**
     * componentName
     * User defined nicknae of the functional unit.
     */
    componentName: UAProperty<LocalizedText, /*z*/ DataType.LocalizedText>;
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
     * methodSet
     * Flat list of Methods
     */
    methodSet?: UAFunctionalUnit_methodSet;
    /**
     * operational
     * Used to organize parameters for operation of this
     * functional unit.
     */
    operational?: UAFunctionalUnit_operational;
    /**
     * programManager
     * Manages programs and results of the
     * functional-unit.
     */
    programManager?: UAProgramManager;
    supportedPropertySet?: UAPropertySet;
}
export interface UAFunctionalUnit extends Omit<UATopologyElement, "identification" | "lock" | "methodSet">, UAFunctionalUnit_Base {
}
