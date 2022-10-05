import {LadsDevice} from "./types/lads_device";
import {StaticDeviceData} from "./types/static_device_data";
import {FunctionalUnit} from "./types/functional_unit";

// TODO check in required fields for non-empty string
const info: StaticDeviceData = {
    location: "Hackathon",
    manufacturer: "2mag AG",
    manufacturerUri: "uri://2mag.com",
    model: "MixControl 20",
    name: "MixDevice",
    serialNumber: "20220507-556622",
    softwareRevision: "0.20.6-dev",
    revisionCounter: 475,
    deviceRevision: "v8351"
}

const unitMethodSet: Uni

const functionalUnit: FunctionalUnit = {
    componentName: "MixControl20",
    functionSet: [],
    lock: "",
    methodSet: undefined
}

const MyMixer: LadsDevice = {
    functionalUnits: {"MixControl20": functionalUnit},
    information: info
}