import {ACMEMixerUnit} from "./mixer";
import {MockOpcServer} from "./mock_opc_server";
import {OPCUALadsPlugin} from "./opcua-lads-plugin";
import { LadsViews } from "./abstract_class";

const myMixerUnit = new ACMEMixerUnit("MixerUnit");

const opcServer = new MockOpcServer();
const plugin = new OPCUALadsPlugin(opcServer);


plugin.addUnit("MixerDevice", myMixerUnit);
