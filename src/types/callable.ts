export type primitive = number | string;

export interface Callable<I extends Iterable<primitive>, O extends Iterable<primitive>> {
    argumentTypes: I;
    action: (input: I) => O;
    resultTypes: O;
}