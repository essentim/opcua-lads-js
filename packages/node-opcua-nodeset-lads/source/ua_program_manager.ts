// ----- this file has been automatically generated - do not edit
import { UAMethod, UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { UAString } from "node-opcua-basic-types"
import { UATopologyElement, UATopologyElement_Base } from "node-opcua-nodeset-di/source/ua_topology_element"
import { UAProgramTemplateSet } from "./ua_program_template_set"
import { UAActiveProgram } from "./ua_active_program"
import { UAResultSet } from "./ua_result_set"
export interface UAProgramManager_programTemplateSet extends Omit<UAProgramTemplateSet, "nodeVersion"> { // Object
      download?: UAMethod;
      nodeVersion: UAProperty<UAString, DataType.String>;
      remove?: UAMethod;
      upload?: UAMethod;
}
/**
 * The functional unit's program manager.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:ProgramManagerType ns=4;i=1006                  |
 * |isAbstract      |false                                             |
 */
export interface UAProgramManager_Base extends UATopologyElement_Base {
    activeProgram: UAActiveProgram;
    /**
     * programTemplateSet
     * Program templates.
     */
    programTemplateSet: UAProgramManager_programTemplateSet;
    /**
     * resultSet
     * Results of recent program runs.
     */
    resultSet: UAResultSet;
}
export interface UAProgramManager extends UATopologyElement, UAProgramManager_Base {
}