// ----- this file has been automatically generated - do not edit
import { UAObject } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { UInt32 } from "node-opcua-basic-types"
import { UABaseDataVariable } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
import { UAFiniteStateVariable } from "node-opcua-nodeset-ua/source/ua_finite_state_variable"
import { UAProgramTemplate } from "./ua_program_template"
import { UALADSProgramBaseStateMachine } from "./ua_lads_program_base_state_machine"
/**
 * The currently active program on the device.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:ActiveProgramType ns=3;i=1040                   |
 * |isAbstract      |false                                             |
 */
export interface UAActiveProgram_Base {
    currentPauseTime: UABaseDataVariable<number, /*z*/DataType.Double>;
    currentRunTime: UABaseDataVariable<number, /*z*/DataType.Double>;
    currentStepName: UABaseDataVariable<LocalizedText, /*z*/DataType.LocalizedText>;
    currentStepNumber: UABaseDataVariable<UInt32, /*z*/DataType.UInt32>;
    currentStepRunTime: UABaseDataVariable<number, /*z*/DataType.Double>;
    effectiveState: UAFiniteStateVariable<LocalizedText>;
    estimatedRunTime: UABaseDataVariable<number, /*z*/DataType.Double>;
    estimatedStepNumbers: UABaseDataVariable<UInt32, /*z*/DataType.UInt32>;
    estimatedStepRunTime: UABaseDataVariable<number, /*z*/DataType.Double>;
    /**
     * programTemplate
     * Represents contextual information about the
     * program template used by the currently active
     * program.
     */
    programTemplate: UAProgramTemplate;
    /**
     * stateMachine
     * The statemachine of the currently active program.
     */
    stateMachine: UALADSProgramBaseStateMachine;
}
export interface UAActiveProgram extends UAObject, UAActiveProgram_Base {
}