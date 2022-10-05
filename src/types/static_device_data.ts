import {FunctionalUnit} from "./functional_unit";

export interface StaticDeviceData {
    name: string;
    deviceClass?: string;

    hardwareRevision?: string;
    initialOperationDate?: string;
    location: string;


    manufacturer: string;
    manufacturerUri: string;
    model: string;
    serialNumber: string;
    softwareRevision: string;

    revisionCounter?: number;
    deviceRevision?: string;
}