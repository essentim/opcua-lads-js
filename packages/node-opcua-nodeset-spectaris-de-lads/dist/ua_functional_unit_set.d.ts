import { UAObject } from "node-opcua-address-space-base";
/**
 * Set of Functional Units.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:FunctionalUnitSetType ns=3;i=1023               |
 * |isAbstract      |false                                             |
 */
export interface UAFunctionalUnitSet_Base {
}
export interface UAFunctionalUnitSet extends UAObject, UAFunctionalUnitSet_Base {
}
