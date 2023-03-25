// ----- this file has been automatically generated - do not edit
import { UABaseSensorFunction, UABaseSensorFunction_Base } from "./ua_base_sensor_function"
import { UASensorValueSet } from "./ua_sensor_value_set"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:MultiAnalogSensorFunctionType ns=4;i=1051       |
 * |isAbstract      |false                                             |
 */
export interface UAMultiAnalogSensorFunction_Base extends UABaseSensorFunction_Base {
    sensorValueSet: UASensorValueSet;
}
export interface UAMultiAnalogSensorFunction extends UABaseSensorFunction, UAMultiAnalogSensorFunction_Base {
}