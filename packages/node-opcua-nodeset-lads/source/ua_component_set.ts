// ----- this file has been automatically generated - do not edit
import { UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { UAString } from "node-opcua-basic-types"
import { UAMachineComponents, UAMachineComponents_Base } from "node-opcua-nodeset-machinery/source/ua_machine_components"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:ComponentSetType ns=4;i=1025                    |
 * |isAbstract      |false                                             |
 */
export interface UAComponentSet_Base extends UAMachineComponents_Base {
    nodeVersion?: UAProperty<UAString, DataType.String>;
   // PlaceHolder for $Component$
}
export interface UAComponentSet extends Omit<UAMachineComponents, "$Component$">, UAComponentSet_Base {
}