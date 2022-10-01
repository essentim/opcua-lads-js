interface FunctionalUnit {
    componentName: string;
    lock: string;
    identifaction?: string;


    functionSet: Function[];
    methodSet: UnitMethodSet[]
    programManager?: ProgramManager
    supportedPropertySet?: PropertySet;
}