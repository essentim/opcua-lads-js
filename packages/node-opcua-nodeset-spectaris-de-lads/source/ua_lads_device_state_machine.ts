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
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:LADSDeviceStateMachineType ns=3;i=1039          |
 * |isAbstract      |false                                             |
 */
export interface UALADSDeviceStateMachine_Base extends UAFiniteStateMachine_Base {
    gotoMaintenance?: UAMethod;
    gotoOperating?: UAMethod;
    gotoShutdown?: UAMethod;
    gotoStandby?: UAMethod;
    maintenance: UAState;
    maintenanceToOperatingTransition: UATransition;
    maintenanceToShutdownTransition: UATransition;
    operating: UAState;
    operatingToMaintenanceTransition: UATransition;
    operatingToShutdownTransition: UATransition;
    operatingToStandbyTransition: UATransition;
    powerup: UAInitialState;
    powerupToOperatingTransition: UATransition;
    shutdown: UAState;
    standby: UAState;
    standbyToOperatingTransition: UAState;
}
export interface UALADSDeviceStateMachine extends UAFiniteStateMachine, UALADSDeviceStateMachine_Base {
}