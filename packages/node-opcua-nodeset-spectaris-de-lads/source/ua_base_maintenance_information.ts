// ----- this file has been automatically generated - do not edit
import { UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { UInt64 } from "node-opcua-basic-types"
import { UAFunctionalGroup, UAFunctionalGroup_Base } from "node-opcua-nodeset-di/source/ua_functional_group"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:BaseMaintenanceInformationType ns=3;i=1034      |
 * |isAbstract      |false                                             |
 */
export interface UABaseMaintenanceInformation_Base extends UAFunctionalGroup_Base {
    totalOperationCycles?: UAProperty<UInt64, /*z*/DataType.UInt64>;
    totalOperationDuration?: UAProperty<number, /*z*/DataType.Double>;
}
export interface UABaseMaintenanceInformation extends UAFunctionalGroup, UABaseMaintenanceInformation_Base {
}