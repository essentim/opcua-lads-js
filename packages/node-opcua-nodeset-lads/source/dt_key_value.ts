// ----- this file has been automatically generated - do not edit
import { UAString } from "node-opcua-basic-types"
import { ExtensionObject } from "node-opcua-extension-object"
import { DTStructure } from "node-opcua-nodeset-ua/source/dt_structure"
/**
 * |           |                                                  |
 * |-----------|--------------------------------------------------|
 * | namespace |http://opcfoundation.org/UA/LADS/                 |
 * | nodeClass |DataType                                          |
 * | name      |4:KeyValueType                                    |
 * | isAbstract|false                                             |
 */
export interface DTKeyValue extends DTStructure {
  key: UAString; // String ns=0;i=12
  value: UAString; // String ns=0;i=12
}
export interface UDTKeyValue extends ExtensionObject, DTKeyValue {};