import {
  ILADSComponent,
  IUABaseMaintenanceInformation,
  IUATask,
  ILADSComponentIdentification,
  LADSComponentType,
} from "../types";

import {DataType, UAObject} from "node-opcua";
import {MappedUANode} from "./MappedNode";
import {EnumDeviceHealth} from "node-opcua-nodeset-di";

type WriteableLADSComponentIdentification = { -readonly [key in keyof ILADSComponentIdentification]: ILADSComponentIdentification[key] };

export class LADSComponent extends MappedUANode implements ILADSComponent {
  // Make identification properties writable for internal functions,
  // but keep them readonly on the outside via the readonly-flag
  // on the interface ILADSComponentIdentification
  identification: WriteableLADSComponentIdentification;

  // presentation
  deviceManual?: string = "";

  // device state
  deviceHealth?: EnumDeviceHealth = EnumDeviceHealth.NORMAL;
  deviceHealthAlarms?: any[] | undefined = undefined;
  // FIXME: create mapping for statemachine and initialize
  // stateMachine: UALADSDeviceStateMachine;
  maintenance?: IUABaseMaintenanceInformation | undefined;
  tasks?: IUATask[] | undefined;
  components?: ILADSComponent[] = [];

  constructor(deviceNode: UAObject, props: LADSComponentType) {
    super(deviceNode);
    this.identification = props;
    // set passed properties as initial values if passed
    if (props) { this.setPropertiesFromObject(props); }
    // opc should be complete, trigger a full readout
    this.loadPropertiesFromServer();
  }

  loadPropertiesFromServer(): void {
    // FIXME: handle optional variables
    //  set to undefined, or empty string if writable!
    // this.identification.componentName = this.readVariableValueByBrowsePath<string>('Identification/ComponentName');
    this.identification.manufacturer = this.readVariableValueByBrowsePath<string>('Identification/Manufacturer');
    // this.identification.manufacturerUri = this.readVariableValueByBrowsePath<string>('Identification/ManufacturerUri');
    this.identification.model = this.readVariableValueByBrowsePath<string>('Model');
    // this.identification.productInstanceUri = this.readVariableValueByBrowsePath<string>('Identification/ProductInstanceUri');
    // this.identification.hardwareRevision = this.readVariableValueByBrowsePath<string>('HardwareRevision');
    // this.identification.softwareRevision = this.readVariableValueByBrowsePath<string>('SoftwareRevision');
    this.identification.serialNumber = this.readVariableValueByBrowsePath<string>('Identification/SerialNumber');
  }

  setPropertiesFromObject(deviceProps: LADSComponentType) {
    this.setVariableValueByBrowsePath<DataType.String>('SerialNumber', deviceProps.serialNumber);
    // FIXME: instantiate optional variables on demand
    //this.setVariableValueByBrowsePath<DataType.LocalizedText>('Identification/ComponentName', deviceProps.componentName);
    this.setVariableValueByBrowsePath<DataType.LocalizedText>('Identification/Manufacturer', deviceProps.manufacturer);
    // this.setVariableValueByBrowsePath<DataType.String>('Identification/ManufacturerUri', deviceProps.manufacturerUri);
    this.setVariableValueByBrowsePath<DataType.LocalizedText>('Model', deviceProps.model);
    // this.setVariableValueByBrowsePath<DataType.LocalizedText>('Identification/Model', deviceProps.model);
    // this.setVariableValueByBrowsePath<DataType.String>('Identification/ProductInstanceUri', deviceProps.productInstanceUri);
    // this.setVariableValueByBrowsePath<DataType.String>('DeviceRevision', deviceProps.deviceRevision);
    // this.setVariableValueByBrowsePath<DataType.String>('HardwareRevision', deviceProps.hardwareRevision);
    // this.setVariableValueByBrowsePath<DataType.String>('SoftwareRevision', deviceProps.softwareRevision);
  }
}
