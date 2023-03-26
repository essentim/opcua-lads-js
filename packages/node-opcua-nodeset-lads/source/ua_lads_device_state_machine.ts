// ----- this file has been automatically generated - do not edit
import { UAMethod } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { UInt32 } from "node-opcua-basic-types"
import { UAFiniteStateMachine, UAFiniteStateMachine_Base } from "node-opcua-nodeset-ua/source/ua_finite_state_machine"
import { UAState } from "node-opcua-nodeset-ua/source/ua_state"
import { UATransition } from "node-opcua-nodeset-ua/source/ua_transition"
import { UAInitialState } from "node-opcua-nodeset-ua/source/ua_initial_state"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:LADSDeviceStateMachineType ns=4;i=1039          |
 * |isAbstract      |false                                             |
 */
export interface UALADSDeviceStateMachine_Base extends UAFiniteStateMachine_Base {
    gotoMaintenance?: UAMethod;
    gotoOperating?: UAMethod;
    gotoShutdown?: UAMethod;
    gotoStandby?: UAMethod;
    maintenance: UAState;
    maintenanceToOperating: UATransition;
    maintenanceToShutdown: UATransition;
    operating: UAState;
    operatingToMaintenance: UATransition;
    operatingToShutdown: UATransition;
    operatingToStandby: UATransition;
    powerup: UAInitialState;
    powerupToOperating: UATransition;
    shutdown: UAState;
    standby: UAState;
    standbyToOperating: UATransition;
}
export interface UALADSDeviceStateMachine extends UAFiniteStateMachine, UALADSDeviceStateMachine_Base {
}