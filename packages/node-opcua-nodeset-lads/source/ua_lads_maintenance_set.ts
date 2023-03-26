// ----- this file has been automatically generated - do not edit
import { DataType, VariantOptions } from "node-opcua-variant"
import { LocalizedText, QualifiedName } from "node-opcua-data-model"
import { NodeId } from "node-opcua-nodeid"
import { StatusCode } from "node-opcua-status-code"
import { UInt32, UInt16, Int16, UAString } from "node-opcua-basic-types"
import { DTTimeZone } from "node-opcua-nodeset-ua/source/dt_time_zone"
import { DTArgument } from "node-opcua-nodeset-ua/source/dt_argument"
import { UAFunctionalGroup, UAFunctionalGroup_Base } from "node-opcua-nodeset-di/source/ua_functional_group"
import { EnumMaintenanceMethodEnum } from "node-opcua-nodeset-amb/source/enum_maintenance_method_enum"
import { DTNameNodeId } from "node-opcua-nodeset-amb/source/dt_name_node_id"
import { UAMaintenanceTask } from "./ua_maintenance_task"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:LADSMaintenanceSetType ns=4;i=1027              |
 * |isAbstract      |false                                             |
 */
export interface UALADSMaintenanceSet_Base extends UAFunctionalGroup_Base {
    "$MaintenanceTask$"?: UAMaintenanceTask;
}
export interface UALADSMaintenanceSet extends UAFunctionalGroup, UALADSMaintenanceSet_Base {
}