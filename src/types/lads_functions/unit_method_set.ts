/*
* Method set attached to the Unit and not to the underlying functions.*/
import {Callable, primitive} from "../callable";

/**
 * Methods that are called on start or stop of the whole unit, typically device start-up and tear-down code.
 */
export interface UnitMethodSet {
    // todo: correct generic type parameters here
    startFunctions?: Callable<primitive[], primitive[]>//opcua_method, callable
    stopFunctions?: Callable<primitive[], primitive[]>
}
