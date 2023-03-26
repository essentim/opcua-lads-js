// ----- this file has been automatically generated - do not edit
import { UAString } from "node-opcua-basic-types"
import { ExtensionObject } from "node-opcua-extension-object"
import { DTStructure } from "node-opcua-nodeset-ua/source/dt_structure"
/**
 * |           |                                                  |
 * |-----------|--------------------------------------------------|
 * | namespace |http://opcfoundation.org/UA/LADS/                 |
 * | nodeClass |DataType                                          |
 * | name      |4:SampleInfoType                                  |
 * | isAbstract|false                                             |
 */
export interface DTSampleInfo extends DTStructure {
  containerId: UAString; // String ns=0;i=12
  sampleId: UAString; // String ns=0;i=12
  position: UAString; // String ns=0;i=12
  customData: UAString; // String ns=0;i=12
}
export interface UDTSampleInfo extends ExtensionObject, DTSampleInfo {};