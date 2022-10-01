import { UADiscreteItem } from "node-opcua-nodeset-ua/source/ua_discrete_item";
import { UABaseSensorFunction, UABaseSensorFunction_Base } from "./ua_base_sensor_function";
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://spectaris.de/LADS/                         |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |3:DiscreteSensorFunctionType ns=3;i=1012          |
 * |isAbstract      |false                                             |
 */
export interface UADiscreteSensorFunction_Base extends UABaseSensorFunction_Base {
    sensorValue: UADiscreteItem<any, any>;
}
export interface UADiscreteSensorFunction extends UABaseSensorFunction, UADiscreteSensorFunction_Base {
}
