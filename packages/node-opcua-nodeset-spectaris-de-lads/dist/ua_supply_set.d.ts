import { UAObject } from "node-opcua-address-space-base";
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:SupplySetType ns=3;i=1031                       |
 * |isAbstract      |false                                             |
 */
export interface UASupplySet_Base {
}
export interface UASupplySet extends UAObject, UASupplySet_Base {
}
