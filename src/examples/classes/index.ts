import {MockOpcServer} from "./mock_opc_server";
import {OPCUALadsPlugin} from "./opcua-lads-plugin";
import {LadsDevice, LadsFunctionalUnit, LadsSensorFunction} from "./abstract_class";

const opcServer = new MockOpcServer();
const plugin = new OPCUALadsPlugin(opcServer);

let myUnit  =  new LadsFunctionalUnit('MyMixerUnit');

myUnit.addFunction(new class extends LadsSensorFunction<number> {
    onRead(): number {
        console.log('[serial] -> read value from device');
        return 12.45;
    }
}("TemperatureSensor","°C"))


const device = new LadsDevice('MixerDevice')
.addFunctionalUnit(myUnit)

plugin.addUnit("MixerDevice", myUnit);
