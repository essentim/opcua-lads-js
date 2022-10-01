type primitive = number | string

interface Callable<I extends Iterable<primitive>, O extends Iterable<primitive>> {
    argumentTypes: I;
    action: (input: I) => O;
    resultTypes: O;
}