import { UAObject, UAMethod } from "node-opcua-address-space-base";
/**
 * Set of program templates.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:ProgramTemplateSetType ns=3;i=1019              |
 * |isAbstract      |false                                             |
 */
export interface UAProgramTemplateSet_Base {
    download?: UAMethod;
    remove?: UAMethod;
    upload?: UAMethod;
}
export interface UAProgramTemplateSet extends UAObject, UAProgramTemplateSet_Base {
}
