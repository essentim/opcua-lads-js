export enum LadsViews {
    'Operational',
    'Maintenance',
    'Service',
}

interface ILadsFunctionalUnit {
    onStartFunctions?: () => boolean | undefined;
    onStopFunctions?: () => boolean | undefined;
}

export class LadsFunctionalUnit implements ILadsFunctionalUnit {
    readonly browseName: string;
    functions: LadsFunction[] = [];
    readonly displayName: string = "";
    parent: any;

    constructor(browseName:string) {
        this.browseName = browseName;
        this.displayName = browseName;
    }

    addFunction(func: LadsFunction, views: LadsViews[] = [LadsViews.Maintenance]) {

        this.functions.push(func);
        func.setParent(this);
    }

    setParent(parent:any) {
        this.parent = parent;
    }

    onStartFunctions(): boolean {
        return false;
    }

    onStopFunctions(): boolean {
        return false;
    }

}

export abstract class LadsFunction {
    name: string
    browseName: string;
    parent: any;

    view: LadsViews = LadsViews.Operational;

    constructor(name: string) {
        this.browseName = name;
        this.name = name;
    }

    setParent(parent: any) {
        this.parent = parent;
    }
}

export class LadsDevice {
    name: string
    browseName: string;
    units: LadsFunctionalUnit[] = [];

    constructor(name: string) {
        this.browseName = name;
        this.name = name;
    }

    addFunctionalUnit(unit: LadsFunctionalUnit): LadsDevice {
        this.units.push(unit);
        unit.setParent(this);

        return this;
    }
}

export abstract class LadsControlFunction extends LadsFunction {
    abstract onStart(): boolean;
    abstract onStop(): boolean;
}

export abstract class LadsSensorFunction<T> extends LadsFunction{
    protected unit;

    constructor(browseName:string, unit:string) {
        super(browseName);
        this.unit = unit;
    }

    abstract onRead(): T
}
