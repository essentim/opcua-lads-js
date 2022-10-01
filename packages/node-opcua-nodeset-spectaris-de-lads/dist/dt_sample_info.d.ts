import { UAString } from "node-opcua-basic-types";
import { DTStructure } from "node-opcua-nodeset-ua/source/dt_structure";
/**
 * |           |                                                  |
 * |-----------|--------------------------------------------------|
 * | namespace |http://spectaris.de/LADS/                         |
 * | nodeClass |DataType                                          |
 * | name      |3:SampleInfoType                                  |
 * | isAbstract|false                                             |
 */
export interface DTSampleInfo extends DTStructure {
    containerId: UAString;
    sampleId: UAString;
    position: UAString;
    customData: UAString;
}
