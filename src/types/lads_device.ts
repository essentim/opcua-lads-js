import {StaticDeviceData} from "./static/*        address_space.register_namespace("http://spectaris.de/sensorsystem/");
        sensor_system::populate_address_space(&mut address_space);
*/_device_data";
import {FunctionalUnit} from "./functional_unit";

/**
 * Top-level wrapper for an OPCUA-LADS device.
 */
export interface LadsDevice {
    information: StaticDeviceData;
    components?: any[];
    // Key of the map is the browse name
    // functionalUnits: Map<string, FunctionalUnit>;
     functionalUnits: {[key: string]: FunctionalUnit}
}