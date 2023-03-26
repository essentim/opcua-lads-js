// ----- this file has been automatically generated - do not edit
import { UAMethod, UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { UInt32 } from "node-opcua-basic-types"
import { UAMaintenanceRequiredAlarm, UAMaintenanceRequiredAlarm_Base } from "node-opcua-nodeset-di/source/ua_maintenance_required_alarm"
import { EnumMaintenanceMethodEnum } from "node-opcua-nodeset-amb/source/enum_maintenance_method_enum"
import { UAMaintenanceEventStateMachine } from "node-opcua-nodeset-amb/source/ua_maintenance_event_state_machine"
import { DTNameNodeId } from "node-opcua-nodeset-amb/source/dt_name_node_id"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:MaintenanceTaskType ns=4;i=1028                 |
 * |isAbstract      |false                                             |
 */
export interface UAMaintenanceTask_Base extends UAMaintenanceRequiredAlarm_Base {
    start?: UAMethod;
    lastExecutionDate?: UAProperty<Date, DataType.DateTime>;
    recurrencePeriod?: UAProperty<number, DataType.Double>;
    lastOperatingTime?: UAProperty<number, DataType.Double>;
    nextOperatingTime?: UAProperty<number, DataType.Double>;
    lastOperatingCycles?: UAProperty<UInt32, DataType.UInt32>;
    nextOperatingCycles?: UAProperty<UInt32, DataType.UInt32>;
    stop?: UAMethod;
    reset?: UAMethod;
    configurationChanged?: UAProperty<boolean, DataType.Boolean>;
    estimatedDowntime?: UAProperty<number, DataType.Double>;
    maintenanceMethod?: UAProperty<EnumMaintenanceMethodEnum, DataType.Int32>;
    maintenanceState: UAMaintenanceEventStateMachine;
    maintenanceSupplier?: UAProperty<DTNameNodeId, DataType.ExtensionObject>;
    partsOfAssetReplaced?: UAProperty<DTNameNodeId[], DataType.ExtensionObject>;
    partsOfAssetServiced?: UAProperty<DTNameNodeId[], DataType.ExtensionObject>;
    plannedDate?: UAProperty<Date, DataType.DateTime>;
    qualificationOfPersonnel?: UAProperty<DTNameNodeId, DataType.ExtensionObject>;
}
export interface UAMaintenanceTask extends Omit<UAMaintenanceRequiredAlarm, "reset">, UAMaintenanceTask_Base {
}