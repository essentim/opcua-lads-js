import {ProgramManager} from "./program_manager";
import {PropertySet} from "./property_set";
import {UnitMethodSet} from "./lads_functions/unit_method_set";

export interface FunctionalUnit {
    componentName: string;
    lock: string;
    identification?: string;


    functionSet: Function[];
    methodSet: UnitMethodSet;
    programManager?: ProgramManager
    supportedPropertySet?: PropertySet;
}