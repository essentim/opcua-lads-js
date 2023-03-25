// ----- this file has been automatically generated - do not edit
import { UAObject, UAProperty } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { UInt32, UAString } from "node-opcua-basic-types"
import { UAProgramTemplate } from "./ua_program_template"
/**
 * The currently active program on the device.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:ActiveProgramType ns=4;i=1040                   |
 * |isAbstract      |false                                             |
 */
export interface UAActiveProgram_Base {
    currentPauseTime?: UAProperty<number, DataType.Double>;
    currentRuntime?: UAProperty<number, DataType.Double>;
    currentStepName?: UAProperty<LocalizedText, DataType.LocalizedText>;
    currentStepNumber?: UAProperty<UInt32, DataType.UInt32>;
    currentStepRuntime?: UAProperty<number, DataType.Double>;
    estimatedRunTime?: UAProperty<number, DataType.Double>;
    estimatedStepNumbers?: UAProperty<UInt32, DataType.UInt32>;
    estimatedStepRuntime?: UAProperty<number, DataType.Double>;
    /**
     * programTemplate
     * Represents contextual information about the
     * program template used by the currently active
     * program.
     */
    programTemplate: UAProgramTemplate;
    /**
     * deviceProgramRunID
     * The device specific ID of the active run (if any).
     */
    deviceProgramRunID?: UAProperty<UAString, DataType.String>;
}
export interface UAActiveProgram extends UAObject, UAActiveProgram_Base {
}