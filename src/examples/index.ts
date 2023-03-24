import {UAComponentSet, UALADSDevice, UABaseMaintenanceInformation} from 'node-opcua-nodeset-spectaris-de-lads';
import {UInt64, UAString, UAPro} from 'node-opcua-basic-types';

const assetId: 'InvertoryId';
const componentName = 'MyNickName';

const hyperpath: UALADSDevice = {
  assetId,
  componentName,
  deviceManual:,
  deviceRevision: undefined,
  functionalUnitSet: undefined,
  hardwareRevision: undefined,
  identification: undefined,
  lock: undefined,
  maintenance: {
    totalOperationCycles: UAVariable(10),
    totalOperationDuration: 300
  },
  manufacturer: undefined,
  manufacturerUri: undefined,
  model: undefined,
  operational: undefined,
  serialNumber: undefined,
  softwareRevision: undefined,
  stateMachine: undefined,
  supplySet: undefined,
  taskSet: undefined

}
