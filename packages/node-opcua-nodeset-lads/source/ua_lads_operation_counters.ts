// ----- this file has been automatically generated - do not edit
import { UAProperty } from "node-opcua-address-space-base"
import { DataType, Variant, VariantOptions } from "node-opcua-variant"
import { EUInformation } from "node-opcua-data-access"
import { NodeId } from "node-opcua-nodeid"
import { UAString } from "node-opcua-basic-types"
import { DTRange } from "node-opcua-nodeset-ua/source/dt_range"
import { UAFunctionalGroup, UAFunctionalGroup_Base } from "node-opcua-nodeset-di/source/ua_functional_group"
import { UALifetimeVariable } from "node-opcua-nodeset-di/source/ua_lifetime_variable"
/**
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/LADS/                 |
 * |nodeClass       |ObjectType                                        |
 * |typedDefinition |4:LADSOperationCountersType ns=4;i=1034           |
 * |isAbstract      |false                                             |
 */
export interface UALADSOperationCounters_Base extends UAFunctionalGroup_Base {
    /**
     * operationCycleCounter
     * OperationCycleCounter is counting the times the
     * Device switches from not performing an activity
     * to performing an activity. For example, each time
     * a valve starts moving, is counted. This value
     * shall only increase during the lifetime of the
     * Device and shall not be reset when the Device is
     * restarted.
     */
    operationCycleCounter?: UAProperty<any, any>;
    /**
     * operationDuration
     * OperationDuration is the duration the Device has
     * been powered and performing an activity. This
     * counter is intended for Devices where a
     * distinction is made between switched on and in
     * operation. For example, a drive might be powered
     * on but not operating. It is not intended for
     * Devices always performing an activity like
     * sensors always measuring data. This value shall
     * only increase during the lifetime of the Device
     * and shall not be reset when the Device is
     * restarted. The OperationDuration is provided as
     * Duration, i.e., in milliseconds or even fractions
     * of a millisecond. However, the Server is not
     * expected to update the value in such a high
     * frequency, but maybe once a minute or once an
     * hour, depending on the application.
     */
    operationDuration?: UAProperty<number, DataType.Double>;
    /**
     * powerOnDuration
     * PowerOnDuration is the duration the Device has
     * been powered. The main purpose is to determine
     * the time in which degradation of the Device
     * occurred. The details, when the time is counted,
     * is implementation-specific. Companion
     * specifications might define specific rules.
     * Typically, when the Device has supply voltage and
     * the main CPU is running, the time is counted.
     * This may include any kind of sleep mode, but may
     * not include pure Wake on LAN. This value shall
     * only increase during the lifetime of the Device
     * and shall not be reset when the Device is
     * restarted. The PowerOnDuration is provided as
     * Duration, i.e., in milliseconds or even fractions
     * of a millisecond. However, the Server is not
     * expected to update the value in such a high
     * frequency, but maybe once a minute or once an
     * hour, depending on the application.
     */
    powerOnDuration?: UAProperty<number, DataType.Double>;
    lifeTime?: UALifetimeVariable<any, any>;
}
export interface UALADSOperationCounters extends UAFunctionalGroup, UALADSOperationCounters_Base {
}