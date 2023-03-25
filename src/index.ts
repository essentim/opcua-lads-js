import path from "path";

import { LADSDevice } from "./plugin/device";
import { OPCUAServer, nodesets } from 'node-opcua';
import {LadsOPCUAServerPlugin} from "./plugin/lads-plugin";
import {ILADSDevice} from "./types/device";

const opcuaServer = new OPCUAServer({
  nodeset_filename: [
    // add default node-sets, otherwise they'll be removed
    nodesets.standard,
    nodesets.di,
    nodesets.machinery,
    path.join(__dirname, '../nodesets', 'Opc.Ua.AMB.NodeSet2.xml'),
    // FIXME: add required nodesets in ladsplugin
    path.join(__dirname, '../nodesets', 'lads.xml')
  ],
  port: 4841,
  resourcePath: '/LADSServer',
  buildInfo: {
    productName: 'essentim lads connector',
    manufacturerName: 'essentim GmbH',
    softwareVersion: '0.0.1',
    buildNumber: 'dev',
    buildDate: new Date()
  }
})
async function run() {
  try {
    // Init server
    await opcuaServer.initialize();
    const LadsServer = new LadsOPCUAServerPlugin(opcuaServer);

    // Start server
    await opcuaServer.start();
    console.log(`Server started on ${opcuaServer.getEndpointUrl()}`);

    console.log('creating device...');
    const myDevice: ILADSDevice = LadsServer.createDevice("SP1JK3900001", {
      assetId: "MYStockNumber1",
      componentName: "Sensor1",
      location: "here",
      manufacturerUri: new URL("https://essentim.com"),
      model: "sphere",
      productInstanceUri: "test",
      deviceRevision: "1", // FIXME: deviceRevision === hardwareRevision?!?
      hardwareRevision: "1",
      softwareRevision: "1",
      manufacturer: "We",
      serialNumber: "SP1JK3900001",
    });

    // show created device loaded from uanodes
    console.log(`got device with revisionCounter: ${myDevice.revisionCounter}`);

    // update property, should be written to uanode
    myDevice.identification.assetId = 'MyUpdatedStockNumber1';
    // myDevice.identification.setComponentName(123);

    // add unit
    // const myUnit = myDevice.addUnit("SP1JK3900001-1");
    // add sensor function
    // const func = myUnit.addSensorFunction("Temperature", Double)
    // update function value
    // func.setValue(22.5)

    // add method
    // const func = myUnit.addControlFunction("Door", () => {
    //   console.log('door open requested');
    // })
/*
    // creater device to publish
    const createdDevice = new LADSDevice("SP1JK3900001", {
      assetId: "MYStockNumber1",
      componentName: "Sensor1",
      location: "here",
      manufacturerUri: new URL("https://essentim.com"),
      model: "sphere",
      productInstanceUri: "test",
      deviceRevision: "1", // FIXME: deviceRevision === hardwareRevision?!?
      hardwareRevision: "1",
      softwareRevision: "1",
      manufacturer: "We",
      serialNumber: "SP1JK3900001",
    });

    // const func = createdDevices.addFunction("Temperature", Double)
    // func.setValue(22.5)

    const mappedDevice = LadsServer.addDevice(createdDevice);
    // load device from opcua-server
    // uniquely identify device: manufacturer model serial number

    // should modify node ComponentName
    mappedDevice.setAssetId('MyUpdatedStockNumber1');
    mappedDevice.setComponentName('MyUpdatedName');
*/

    // usecase connect
    // const loadedDevice: LADSDevice = await LadsServer.loadDevice("SP1JK3900001");
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    }
    process.exit(1);
  }
}

run();
