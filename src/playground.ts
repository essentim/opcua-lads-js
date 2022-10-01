class A {
    constructor() {
    }
}

type dummmy = A | number

console.log(new A() instanceof A);