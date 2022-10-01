// ----- this file has been automatically generated - do not edit
import { UAMethod } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { NodeId } from "node-opcua-nodeid"
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
import { UATransition } from "node-opcua-nodeset-ua/source/ua_transition"
import { UAFiniteStateVariable } from "node-opcua-nodeset-ua/source/ua_finite_state_variable"
import { UAFiniteStateMachine, UAFiniteStateMachine_Base } from "node-opcua-nodeset-ua/source/ua_finite_state_machine"
import { UAState } from "node-opcua-nodeset-ua/source/ua_state"
import { UALADSProgramRunningStateMachine } from "./ua_lads_program_running_state_machine"
export interface UALADSProgramClearedStateMachine_runningStateMachine extends Omit<UALADSProgramRunningStateMachine, "availableStates"|"availableTransitions"|"completeToResetting"|"completingToComplete"|"currentState"|"executeToCompleting"|"executeToHolding"|"executeToSuspending"|"heldToUnholding"|"hold"|"reset"|"start"|"suspend"|"toComplete"|"unhold"|"unsuspend"> { // Object
      availableStates: UABaseDataVariable<NodeId[], /*z*/DataType.NodeId>;
      availableTransitions: UABaseDataVariable<NodeId[], /*z*/DataType.NodeId>;
      completeToResetting?: UATransition;
      completingToComplete?: UATransition;
      currentState: UAFiniteStateVariable<LocalizedText>;
      executeToCompleting?: UATransition;
      executeToHolding?: UATransition;
      executeToSuspending?: UATransition;
      heldToUnholding?: UATransition;
      hold?: UAMethod;
      reset?: UAMethod;
      start?: UAMethod;
      suspend?: UAMethod;
      toComplete?: UAMethod;
      unhold?: UAMethod;
      unsuspend?: UAMethod;
}
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:LADSProgramClearedStateMachineType ns=3;i=1037  |
 * |isAbstract      |false                                             |
 */
export interface UALADSProgramClearedStateMachine_Base extends UAFiniteStateMachine_Base {
    availableStates: UABaseDataVariable<NodeId[], /*z*/DataType.NodeId>;
    availableTransitions: UABaseDataVariable<NodeId[], /*z*/DataType.NodeId>;
    clearing: UAState;
    clearingToStopped: UATransition;
    reset?: UAMethod;
    running: UAState;
    runningStateMachine: UALADSProgramClearedStateMachine_runningStateMachine;
    runningToStopped: UATransition;
    stop?: UAMethod;
    stopped: UAState;
    stoppedToRunning: UATransition;
    stopping: UAState;
    stoppingToStopped: UATransition;
}
export interface UALADSProgramClearedStateMachine extends Omit<UAFiniteStateMachine, "availableStates"|"availableTransitions">, UALADSProgramClearedStateMachine_Base {
}