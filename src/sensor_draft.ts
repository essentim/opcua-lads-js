// import {DataType} from node-opcua-variant
import {StaticDeviceData} from "./types/static_device_data";




    // behaviour
    currentValue: () => number;
}





// user
addFunction({
    argumentTypes: ['number', 'number'],
    action: (name: number, highValue: number) => {
        connectToDeviceAndWrit(anme, highValue)
    }
} as Callable<[number, number], [string]>)


