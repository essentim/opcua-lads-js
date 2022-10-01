// ----- this file has been automatically generated - do not edit
import { UAMethod } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { UAFiniteStateVariable } from "node-opcua-nodeset-ua/source/ua_finite_state_variable"
import { UAFunctionalGroup } from "node-opcua-nodeset-di/source/ua_functional_group"
import { UATopologyElement, UATopologyElement_Base } from "node-opcua-nodeset-di/source/ua_topology_element"
import { UAActiveProgram } from "./ua_active_program"
import { UAProgramTemplateSet } from "./ua_program_template_set"
import { UAResultSet } from "./ua_result_set"
export interface UAProgramManager_operational extends UAFunctionalGroup { // Object
      effectiveState: UAFiniteStateVariable<LocalizedText>;
      start?: UAMethod;
}
/**
 * The functional unit's program manager.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:ProgramManagerType ns=3;i=1006                  |
 * |isAbstract      |false                                             |
 */
export interface UAProgramManager_Base extends UATopologyElement_Base {
    activeProgram: UAActiveProgram;
    operational: UAProgramManager_operational;
    /**
     * programTemplateSet
     * Program templates.
     */
    programTemplateSet: UAProgramTemplateSet;
    /**
     * resultSet
     * Results of recent program runs.
     */
    resultSet: UAResultSet;
}
export interface UAProgramManager extends UATopologyElement, UAProgramManager_Base {
}