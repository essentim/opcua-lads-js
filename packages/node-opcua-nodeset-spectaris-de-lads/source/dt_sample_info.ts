// ----- this file has been automatically generated - do not edit
import { UAString } from "node-opcua-basic-types"
import { DTStructure } from "node-opcua-nodeset-ua/source/dt_structure"
/**
 * |           |                                                  |
 * |-----------|--------------------------------------------------|
 * | namespace |http://spectaris.de/LADS/                         |
 * | nodeClass |DataType                                          |
 * | name      |3:SampleInfoType                                  |
 * | isAbstract|false                                             |
 */
export interface DTSampleInfo extends DTStructure  {
  containerId: UAString; // String ns=0;i=12
  sampleId: UAString; // String ns=0;i=12
  position: UAString; // String ns=0;i=12
  customData: UAString; // String ns=0;i=12
}