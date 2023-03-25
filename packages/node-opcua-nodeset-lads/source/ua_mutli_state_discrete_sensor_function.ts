// ----- this file has been automatically generated - do not edit
import { DataType, VariantOptions } from "node-opcua-variant"
import { LocalizedText } from "node-opcua-data-model"
import { UADiscreteItem } from "node-opcua-nodeset-ua/source/ua_discrete_item"
import { UADiscreteSensorFunction, UADiscreteSensorFunction_Base } from "./ua_discrete_sensor_function"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:MutliStateDiscreteSensorFunctionType ns=4;i=1037|
 * |isAbstract      |false                                             |
 */
export interface UAMutliStateDiscreteSensorFunction_Base extends UADiscreteSensorFunction_Base {
    sensorValue: UADiscreteItem<any, any>;
}
export interface UAMutliStateDiscreteSensorFunction extends Omit<UADiscreteSensorFunction, "sensorValue">, UAMutliStateDiscreteSensorFunction_Base {
}