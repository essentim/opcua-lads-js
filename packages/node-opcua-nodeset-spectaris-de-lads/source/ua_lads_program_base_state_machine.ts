// ----- this file has been automatically generated - do not edit
import { UAMethod } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { NodeId } from "node-opcua-nodeid"
import { UInt32 } from "node-opcua-basic-types"
import { DTArgument } from "node-opcua-nodeset-ua/source/dt_argument"
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
import { UATransition } from "node-opcua-nodeset-ua/source/ua_transition"
import { UAFiniteStateVariable } from "node-opcua-nodeset-ua/source/ua_finite_state_variable"
import { UAState } from "node-opcua-nodeset-ua/source/ua_state"
import { UAFiniteStateMachine, UAFiniteStateMachine_Base } from "node-opcua-nodeset-ua/source/ua_finite_state_machine"
import { UAInitialState } from "node-opcua-nodeset-ua/source/ua_initial_state"
import { UALADSProgramClearedStateMachine, UALADSProgramClearedStateMachine_runningStateMachine } from "./ua_lads_program_cleared_state_machine"
export interface UALADSProgramBaseStateMachine_clearedStateMachine extends Omit<UALADSProgramClearedStateMachine, "availableStates"|"availableTransitions"|"clearingToStopped"|"currentState"|"reset"|"running"|"runningStateMachine"|"runningToStopped"|"stop"|"stoppedToRunning"|"stoppingToStopped"> { // Object
      availableStates: UABaseDataVariable<NodeId[], /*z*/DataType.NodeId>;
      availableTransitions: UABaseDataVariable<NodeId[], /*z*/DataType.NodeId>;
      clearingToStopped?: UATransition;
      currentState: UAFiniteStateVariable<LocalizedText>;
      reset?: UAMethod;
      running?: UAState;
      runningStateMachine: UALADSProgramClearedStateMachine_runningStateMachine;
      runningToStopped?: UATransition;
      stop?: UAMethod;
      stoppedToRunning?: UATransition;
      stoppingToStopped?: UATransition;
}
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:LADSProgramBaseStateMachineType ns=3;i=1038     |
 * |isAbstract      |false                                             |
 */
export interface UALADSProgramBaseStateMachine_Base extends UAFiniteStateMachine_Base {
    abort?: UAMethod;
    aborted: UAState;
    abortedToCleared: UATransition;
    aborting: UAState;
    abortingToAborted: UATransition;
    availableStates: UABaseDataVariable<NodeId[], /*z*/DataType.NodeId>;
    availableTransitions: UABaseDataVariable<NodeId[], /*z*/DataType.NodeId>;
    clear?: UAMethod;
    cleared: UAInitialState;
    clearedStateMachine: UALADSProgramBaseStateMachine_clearedStateMachine;
    clearedToAborting: UATransition;
    start?: UAMethod;
}
export interface UALADSProgramBaseStateMachine extends Omit<UAFiniteStateMachine, "availableStates"|"availableTransitions">, UALADSProgramBaseStateMachine_Base {
}