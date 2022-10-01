// ----- this file has been automatically generated - do not edit
import { UAString } from "node-opcua-basic-types"
import { DTStructure } from "node-opcua-nodeset-ua/source/dt_structure"
/**
 * |           |                                                  |
 * |-----------|--------------------------------------------------|
 * | namespace |http://spectaris.de/LADS/                         |
 * | nodeClass |DataType                                          |
 * | name      |3:KeyValueType                                    |
 * | isAbstract|false                                             |
 */
export interface DTKeyValue extends DTStructure  {
  key: UAString; // String ns=0;i=12
  value: UAString; // String ns=0;i=12
}