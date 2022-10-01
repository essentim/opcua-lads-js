import { UAObject } from "node-opcua-address-space-base";
/**
 * Property which is supported as member of the
 * properties list argument for specific methods
 * e.g., FunctionalUnit.Start() or
 * ActiveProgram.Start(). The objects name will
 * serve as property key.The target variable is
 * linked via an Organizes reference.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:PropertyType ns=3;i=1035                        |
 * |isAbstract      |false                                             |
 */
export interface UAProperty_Base {
}
export interface UAProperty extends UAObject, UAProperty_Base {
}
