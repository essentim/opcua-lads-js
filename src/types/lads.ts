type LADSDeviceType = {
  // from UAComponent_Base
  // from UADevice_Base
  /**
   * manufacturer
   * Name of the company that manufactured the device
   */
  manufacturer: string;
  manufacturerUri?: string;
  /**
   * model
   * Model name of the device
   */
  /**
   * hardwareRevision
   * Revision level of the hardware of the device
   */
  hardwareRevision: string;
  /**
   * softwareRevision
   * Revision level of the software/firmware of the
   * device
   */
  softwareRevision: string;
  /**
   * deviceRevision
   * Overall revision level of the device
   */
  deviceRevision: string;
  productCode?: string;
  /**
   * deviceManual
   * Address (pathname in the file system or a URL |
   * Web address) of user manual for the device
   */
  deviceClass?: string;
  /**
   * serialNumber
   * Identifier that uniquely identifies, within a
   * manufacturer, a device instance
   */
  serialNumber: string;
  productInstanceUri?: string;
  /**
   * revisionCounter
   * An incremental counter indicating the number of
   * times the static data within the Device has been
   * modified
   */
  revisionCounter: number;
  deviceHealth?: number;
  deviceHealthAlarms?: UAFolder;
  /**
   * deviceTypeImage
   * Organizes pictures of the device.
   */
  deviceTypeImage?: UAFolder;
  /**
   * documentation
   * Organizes documents for the device.
   */
  documentation?: UAFolder;
  /**
   * protocolSupport
   * Protocol-specific files for the device.
   */
  protocolSupport?: UAFolder;
  /**
   * imageSet
   * Organizes images that are used within UIElements.
   */
  imageSet?: UAFolder;

  // from UALADSDevice_Base
  assetId: string;
  componentName: string;
  components: UAMachineComponents;
  /**
   * componentSet
   * Set of components.
   */
  componentSet: UAComponentSet;
  deviceHealth: number;
  deviceHealthAlarms?: UAFolder;
  /**
   * deviceManual
   * Address (pathname in the file system or a URL |
   * Web address) of user manual for the device
   */
  deviceManual: string;
  /**
   * deviceRevision
   * Overall revision level of the device
   */
  deviceRevision: string;
  /**
   * functionalUnitSet
   * Contains funtional units of this device.
   */
  functionalUnitSet: UAFunctionalUnitSet;
  /**
   * hardwareRevision
   * Revision level of the hardware of the device
   */
  hardwareRevision: string;
  identification: UALADSDevice_identification;
  /**
   * lock
   * Used to lock the topology element.
   */
  lock: UALockingServices;
  maintenance: UABaseMaintenanceInformation;
  /**
   * manufacturer
   * Name of the company that manufactured the device
   */
  manufacturer: string;
  manufacturerUri?: string;
  /**
   * model
   * Model name of the device
   */
  model: string;
  operational?: UALADSDevice_operational;
  /**
   * serialNumber
   * Identifier that uniquely identifies, within a
   * manufacturer, a device instance
   */
  serialNumber: string;
  /**
   * softwareRevision
   * Revision level of the software/firmware of the
   * device
   */
  softwareRevision: string;
  stateMachine: UALADSDeviceStateMachine;
  supplySet: UASupplySet;
  taskSet: UATaskSet;
};

type LadsComponentType = {
  // from UAComponent_Base
  manufacturer?: UAProperty<LocalizedText, /*z*/ DataType.LocalizedText>;
  manufacturerUri?: UAProperty<UAString, /*z*/ DataType.String>;
  model?: UAProperty<LocalizedText, /*z*/ DataType.LocalizedText>;
  hardwareRevision?: UAProperty<UAString, /*z*/ DataType.String>;
  softwareRevision?: UAProperty<UAString, /*z*/ DataType.String>;
  deviceRevision?: UAProperty<UAString, /*z*/ DataType.String>;
  productCode?: UAProperty<UAString, /*z*/ DataType.String>;
  deviceManual?: UAProperty<UAString, /*z*/ DataType.String>;
  deviceClass?: UAProperty<UAString, /*z*/ DataType.String>;
  serialNumber?: UAProperty<UAString, /*z*/ DataType.String>;
  productInstanceUri?: UAProperty<UAString, /*z*/ DataType.String>;
  revisionCounter?: UAProperty<Int32, /*z*/ DataType.Int32>;
  assetId?: UAProperty<UAString, /*z*/ DataType.String>;
  componentName?: UAProperty<LocalizedText, /*z*/ DataType.LocalizedText>;

  // from UALADSComponent_Base
  componentName?: UAProperty<LocalizedText, /*z*/ DataType.LocalizedText>;
  /**
   * componentSet
   * Set of sub-components.
   */
  componentSet?: UAComponentSet;
  /**
   * deviceHealth
   * Indicates the health status of a device as
   * defined by NAMUR Recommendation NE 107.
   */
  deviceHealth?: UABaseDataVariable<EnumDeviceHealth, /*z*/ DataType.Int32>;
  /**
   * deviceHealthAlarms
   * Groups the all instances of device health realted
   * alarms.
   */
  deviceHealthAlarms?: UAFolder;
  deviceManual?: UAProperty<UAString, /*z*/ DataType.String>;
  deviceRevision?: UAProperty<UAString, /*z*/ DataType.String>;
  hardwareRevision?: UAProperty<UAString, /*z*/ DataType.String>;
  identification: UALADSComponent_identification;
  maintenance?: UABaseMaintenanceInformation;
  manufacturer: UAProperty<LocalizedText, /*z*/ DataType.LocalizedText>;
  manufacturerUri?: UAProperty<UAString, /*z*/ DataType.String>;
  model: UAProperty<LocalizedText, /*z*/ DataType.LocalizedText>;
  productCode?: UAProperty<UAString, /*z*/ DataType.String>;
  productInstanceUri?: UAProperty<UAString, /*z*/ DataType.String>;
  serialNumber: UAProperty<UAString, /*z*/ DataType.String>;
  softwareRevision?: UAProperty<UAString, /*z*/ DataType.String>;
  taskSet?: UATaskSet;
};

export type LadsDeviceType = LadsComponentType & {
  // subcomponents
  components?: [LadsComponentType];
  // functional units
  units: [LadsUnitType];
};
