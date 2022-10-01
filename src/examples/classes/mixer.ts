import {
    LadsFunctionalUnit,
    LadsControlFunction,
    LadsViews
} from "./abstract_class";

// FIXME: use interfaces
class SpeedControllerFunction extends LadsControlFunction {
    speed: number = 0;

    constructor() {
        super("SpeedController");
    }

    onStart(): boolean {
        console.log(`[serial] -> start mixer with ${this.speed} rpm`)
        return true;
    }

    onStop(): boolean {
        console.log(`[serial] -> stop mixer`)
        return true;
    }
}

class PowerControllerFunction extends LadsControlFunction {
    constructor() {
        super("PowerController");
    }

    onStart(): boolean {
        console.log(`[serial] -> power on`);
        return true;
    }

    onStop(): boolean {
        console.log(`[serial] -> power off`);
        return true;
    }

}

export class ACMEMixerUnit extends LadsFunctionalUnit {
    constructor(browseName:string) {
        super(browseName);

        // init with default funtions
        this.addFunction(new PowerControllerFunction(),[LadsViews.Maintenance])
        this.addFunction(new SpeedControllerFunction(),[LadsViews.Maintenance])
    }
    onStartFunctions(): boolean {
        console.log(`[serial] -> power on -> start mixer`);
        return true;
    }

    onStopFunctions(): boolean {
        console.log(`[serial] -> stop mixer -> power off`);
        return true;
    }

}
