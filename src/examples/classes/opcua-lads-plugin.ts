import {LadsFunctionalUnit, LadsDevice, LadsFunction, LadsControlFunction} from "./abstract_class";

export class OPCUALadsPlugin {
    server: any;
    constructor(opcServer: any) {
        this.server = opcServer;
    }

    addDevice(dev:LadsDevice) {

    }

    addUnit(deviceId: string, unit: LadsFunctionalUnit) {
        const prefix = `DeviceSet/${deviceId}/FunctionalUnitSet/${unit.browseName}`;
        this.server.addNode(prefix, unit.displayName)
        this.server.addVariable(prefix+'/ComponentName', unit.displayName)
        this.server.addNode(prefix+'/FunctionSet', 'FunctionSet')
        this.server.addNode(prefix+'/Identification', 'Identification')
        this.server.addNode(prefix+'/MethodeSet', 'MethodeSet')
        this.server.addNode(prefix+'/Operational', 'Operational');

        // add child objects
        unit.functions.forEach((f) => {
            this.addFunction(deviceId, unit.browseName, f);
        })
    }

    addFunction(deviceId:string, unitId:string, func: LadsFunction) {
        const prefix = `DeviceSet/${deviceId}/FunctionalUnitSet/${unitId}/FunctionSet/${func.browseName}`;
        this.server.addNode(prefix+'/ParameterSet', 'ParameterSet')
        this.server.addNode(prefix+'/MethodSet', 'MethodSetSet')

    }
}
