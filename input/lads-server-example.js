const assert = require('assert');

const { forkJoin } = require('rxjs');
const {
  tap, filter, bufferTime, mergeAll, distinct, map, first
} = require('rxjs/operators');

class EssentimLadsMapper {

  constructor(gateway, opcServer) {
    this.gateway = gateway;
    this.opcServer = opcServer;

    this.updateDevice = this.updateDevice.bind(this);
  }

  start() {
    this.pipeToNewlyAppearedDevice().subscribe( (deviceModel) => {

      // TODO: track subscriptions and remove if device dissapears

      // console.log({deviceModel});

      const configSubscription = deviceModel.messages$.subscribe( (deviceConfig) => {
        // device config changed
        // console.log('device config changed', deviceConfig);
        this.updateDevice(deviceModel.deviceId, deviceConfig);
      });

      const sensorDataSubscription = deviceModel.sensorsData().messages$.subscribe( (sensorData) => {
        // new sensordata received
        // console.log('sensor data', sensorData);
        this.updateSensorValues(deviceModel.deviceId, sensorData);
      });
    });
  }

  pipeToNewlyAppearedDevice() {
    return this.gateway.devices().messages$ // each message is array of all devices
      .pipe(
        mergeAll(), // spread device array into single events
        distinct( (device) => device.id ), // only one device per id gets pass here
        map(({ id }) => this.gateway.device(id)), // map device id to device observable
      );
  }

  // pipeToDeviceState(deviceModel) {
  //   return deviceModel.state().messages$.pipe(
  //     tap((deviceState) => {
  //       // console.log(`[${deviceModel.deviceId}] got new state: ${JSON.stringify(deviceState)}`)
  //     })
  //   );
  // }

  // pipeToDeviceEvents(deviceModel) {
  //   return deviceModel.events().messages$.pipe(
  //     tap((event) => {
  //       // console.log(`[${deviceModel.deviceId}] got event: ${JSON.stringify(event)}`);
  //     })
  //   );
  // }

  // pipeToSensorsData(deviceModel) {
  //   return deviceModel.sensorsData().messages$.pipe(
  //     bufferTime(5000),
  //     filter((sensorData) => sensorData.length > 0),
  //     tap((sensorData) => {
  //       /// console.log(`[${deviceModel.deviceId}] got data: ${JSON.stringify(sensorData)}`);
  //     })
  //   );
  // }

  updateDevice(deviceId, devJson) {
    // console.log({ deviceId, devJson });
    if (devJson.info.serial.trim() === '') {
      console.error('device has no serial:', devJson.info);
      return;
    }

    const opcDevice = {
      Manufacturer: devJson.info.manufacturer,
      ManufacturerUri: '',
      Model: devJson.type,
      HardwareRevision: devJson.info.hwversion,
      SoftwareRevision: devJson.info.fwversion,
      DeviceRevision: '',
      ProductCode: '',
      DeviceManual: '',
      DeviceClass: devJson.type,
      SerialNumber: devJson.info.serial.trim(),
      ProductInstanceUri: '',
      RevisionCounter: '',
      AssetId: '',
      ComponentName: devJson.name,
      sensors: devJson.sensors
    };

    this.opcServer.updateDevice(deviceId, opcDevice);
  }

  updateSensorValues(deviceId, sensorData) {
    // console.log({ deviceId, sensorData });
    const OPCSensorData = {
      sensorId: parseInt(sensorData.sensor, 10),
      timestamp: sensorData.timestamp,
      value: sensorData.value,
    };
    this.opcServer.updateSensorValues(deviceId, OPCSensorData);
  }
}
/*
    return this.gateway.devices().messages$.pipe(
      switchMap(pipe(
        map(({ id }) => gateway.device(id).messages$.pipe(
          processDeviceNode(gateway, namespace, parent)
        )),
        (obs) => merge(...obs)
      ))
    ).subscribe();
 */
module.exports = EssentimLadsMapper;

