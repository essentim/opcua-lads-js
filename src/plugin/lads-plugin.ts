import {OPCUAServer} from "node-opcua";
import {ILADSDevice} from "../types/device";

export class LadsOPCUAServerPlugin {
  private server: OPCUAServer;

  constructor(opcuaServer: OPCUAServer) {
    this.server = opcuaServer;
  }

  addDevice(device: ILADSDevice) {

  }

  loadDevice(serial: string) : Promise<ILADSDevice> {

    throw new Error(`device not fould with serial: ${serial}`);
  }
}
