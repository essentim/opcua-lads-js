import { LADSDevice } from "./impl/device";
import { ILADSDeviceIdentification } from "./types/device";

const createdDevice = new LADSDevice("SP1JK3900001", {
  assetId: "MYStockNumebr1",
  componentName: "Sensor1",
  deviceRevision: "1",
  location: "here",
  manufacturerUri: new URL("https://essentim.com"),
  model: "sphere",
  productInstanceUri: "test",
  softwareRevision: "1",
  manufacturer: "We",
  serialNumber: "SP1JK3900001",
});

const LadsServer = createLadsPlugin(opcuaServer);

const mappedDevice = LadsServer.addDevice(createdDevice);

// load device from opcua-server
// uniquely identify device: manufacturer model serial number
const loadedDevice: LADSDevice = LadsServer.findDevice("SP1JK3900001");
