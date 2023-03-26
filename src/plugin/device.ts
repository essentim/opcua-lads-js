import {
  IDeviceOperational,
  ILADSComponent,
  ILADSDevice,
  ILADSDeviceIdentification,
  IUABaseMaintenanceInformation,
  IUASupply,
  IUATask,
  ILADSFunctionalUnit,
  LADSDeviceType,
  LockingType,
} from "../types";

import {DataType, UAObject, UInt32} from "node-opcua";
import {MappedUANode} from "./MappedNode";
import {EnumDeviceHealth} from "node-opcua-nodeset-di";

type WriteableLADSDevicIdentification = { -readonly [key in keyof ILADSDeviceIdentification]: ILADSDeviceIdentification[key] };

export class LADSDevice extends MappedUANode implements ILADSDevice {
  // Make identification properties writable for internal functions,
  // but keep them readonly on the outside via the readonly-flag
  // on the interface ILADSDeviceIdentification
  identification: WriteableLADSDevicIdentification;

  // presentation
  deviceTypeImage?: any[] | undefined;
  images?: any[] | undefined;
  documentation?: any[] | undefined;
  deviceManual: string = "";

  protocolSupport?: any[] | undefined;

  // device state
  deviceHealth: EnumDeviceHealth = EnumDeviceHealth.NORMAL;
  // FIXME: create mapping for statemachine and initialize
  // stateMachine: UALADSDeviceStateMachine;
  lock?: LockingType;
  operational?: IDeviceOperational;
  /**
   * revisionCounter
   * An incremental counter indicating the number of
   * times the static data within the Device has been
   * modified
   */
  revisionCounter: number = 0;

  deviceHealthAlarms?: any[] | undefined = undefined;
  maintenance?: IUABaseMaintenanceInformation | undefined;
  tasks?: IUATask[] | undefined;
  supplySet: IUASupply[] = [];

  components?: ILADSComponent[] = [];
  functionalUnits: ILADSFunctionalUnit[] = [];

  constructor(deviceNode: UAObject, props: LADSDeviceType) {
    super(deviceNode);
    this.identification = {
      ...props,
      setAssetId: this.setAssetId.bind(this),
      setComponentName: this.setComponentName.bind(this)
    };
    // set passed properties as initial values if passed
    if (props) { this.setPropertiesFromObject(props); }
    // opc should be complete, trigger a full readout
    this.loadPropertiesFromServer();
  }

  /**
   * handle property updates
   * @param assetId
   * @private
   */

  private setAssetId(assetId: string) {
    this.setVariableValueByBrowsePath<DataType.String>('AssetId', assetId);
    this.setVariableValueByBrowsePath<DataType.String>('Identification/AssetId', assetId);
    // read back from node
    this.identification.assetId = this.readVariableValueByBrowsePath<string>('Identification/AssetId');
  }

  private setComponentName(componentName: string) {
    this.setVariableValueByBrowsePath<DataType.String>('ComponentName', componentName);
    this.setVariableValueByBrowsePath<DataType.String>('Identification/ComponentName', componentName);
    // read back from node
    this.identification.componentName = this.readVariableValueByBrowsePath<string>('Identification/ComponentName');
  }

  loadPropertiesFromServer(): void {
    this.revisionCounter = this.readVariableValueByBrowsePath<UInt32>('RevisionCounter');
    this.identification.assetId = this.readVariableValueByBrowsePath<string>('Identification/AssetId');
    this.identification.componentName = this.readVariableValueByBrowsePath<string>('Identification/ComponentName');
    this.identification.location = this.readVariableValueByBrowsePath<string>('Identification/Location');
    this.identification.manufacturer = this.readVariableValueByBrowsePath<string>('Identification/Manufacturer');
    this.identification.manufacturerUri = this.readVariableValueByBrowsePath<string>('Identification/ManufacturerUri');
    this.identification.model = this.readVariableValueByBrowsePath<string>('Identification/Model');
    this.identification.productInstanceUri = this.readVariableValueByBrowsePath<string>('Identification/ProductInstanceUri');
    this.identification.hardwareRevision = this.readVariableValueByBrowsePath<string>('HardwareRevision');
    this.identification.softwareRevision = this.readVariableValueByBrowsePath<string>('SoftwareRevision');
    this.identification.serialNumber = this.readVariableValueByBrowsePath<string>('Identification/SerialNumber');
  }

  setPropertiesFromObject(deviceProps: LADSDeviceType) {
    this.setVariableValueByBrowsePath<DataType.String>('SerialNumber', deviceProps.serialNumber);
    this.setAssetId(deviceProps.assetId);

    this.setVariableValueByBrowsePath<DataType.LocalizedText>('Identification/ComponentName', deviceProps.componentName);
    this.setVariableValueByBrowsePath<DataType.String>('Identification/Location', deviceProps.location);
    this.setVariableValueByBrowsePath<DataType.LocalizedText>('Identification/Manufacturer', deviceProps.manufacturer);
    this.setVariableValueByBrowsePath<DataType.String>('Identification/ManufacturerUri', deviceProps.manufacturerUri);
    this.setVariableValueByBrowsePath<DataType.LocalizedText>('Model', deviceProps.model);
    this.setVariableValueByBrowsePath<DataType.LocalizedText>('Identification/Model', deviceProps.model);
    this.setVariableValueByBrowsePath<DataType.String>('Identification/ProductInstanceUri', deviceProps.productInstanceUri);
    this.setVariableValueByBrowsePath<DataType.String>('DeviceRevision', deviceProps.deviceRevision);
    this.setVariableValueByBrowsePath<DataType.String>('HardwareRevision', deviceProps.hardwareRevision);
    this.setVariableValueByBrowsePath<DataType.String>('SoftwareRevision', deviceProps.softwareRevision);
  }
}
