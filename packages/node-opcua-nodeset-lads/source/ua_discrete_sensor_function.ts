// ----- this file has been automatically generated - do not edit
import { DataType, VariantOptions } from "node-opcua-variant"
import { UADiscreteItem } from "node-opcua-nodeset-ua/source/ua_discrete_item"
import { UAFunctionalGroup } from "node-opcua-nodeset-di/source/ua_functional_group"
import { UABaseSensorFunction, UABaseSensorFunction_Base } from "./ua_base_sensor_function"
export interface UADiscreteSensorFunction_operational extends UAFunctionalGroup { // Object
      sensorValue: UADiscreteItem<any, any>;
}
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:DiscreteSensorFunctionType ns=4;i=1012          |
 * |isAbstract      |true                                              |
 */
export interface UADiscreteSensorFunction_Base extends UABaseSensorFunction_Base {
    sensorValue: UADiscreteItem<any, any>;
    /**
     * operational
     * Used to organize parameters for operation of this
     * function.
     */
    operational: UADiscreteSensorFunction_operational;
}
export interface UADiscreteSensorFunction extends Omit<UABaseSensorFunction, "operational">, UADiscreteSensorFunction_Base {
}