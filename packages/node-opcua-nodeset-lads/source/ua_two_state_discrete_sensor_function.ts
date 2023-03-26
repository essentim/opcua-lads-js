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
 * |typedDefinition |4:TwoStateDiscreteSensorFunctionType ns=4;i=1031  |
 * |isAbstract      |false                                             |
 */
export interface UATwoStateDiscreteSensorFunction_Base extends UADiscreteSensorFunction_Base {
    sensorValue: UADiscreteItem<any>;
}
export interface UATwoStateDiscreteSensorFunction extends Omit<UADiscreteSensorFunction, "sensorValue">, UATwoStateDiscreteSensorFunction_Base {
}