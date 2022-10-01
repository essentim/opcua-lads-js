import { UAObject } from "node-opcua-address-space-base";
/**
 * Set of properties which are supported as members
 * of a properties list argument for method calls
 * e.g., FunctionalUnit.StartFunctions() or
 * ActiveProgram.Start().
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:PropertySetType ns=3;i=1033                     |
 * |isAbstract      |false                                             |
 */
export interface UAPropertySet_Base {
}
export interface UAPropertySet extends UAObject, UAPropertySet_Base {
}
