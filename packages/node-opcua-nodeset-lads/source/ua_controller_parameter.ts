// ----- this file has been automatically generated - do not edit
import { UAObject } from "node-opcua-address-space-base"
import { DataType } from "node-opcua-variant"
import { UAAnalogUnitRange } from "node-opcua-nodeset-ua/source/ua_analog_unit_range"
import { UAFunctionalGroup } from "node-opcua-nodeset-di/source/ua_functional_group"
export interface UAControllerParameter_operational extends UAFunctionalGroup { // Object
      currentValue: UAAnalogUnitRange<number, DataType.Double>;
      targetValue: UAAnalogUnitRange<number, DataType.Double>;
}
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:ControllerParameterType ns=4;i=1048             |
 * |isAbstract      |false                                             |
 */
export interface UAControllerParameter_Base {
    currentValue: UAAnalogUnitRange<number, DataType.Double>;
    targetValue: UAAnalogUnitRange<number, DataType.Double>;
    operational?: UAControllerParameter_operational;
}
export interface UAControllerParameter extends UAObject, UAControllerParameter_Base {
}