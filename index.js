// class A
let classA = class {
    constructor() {}
    foo() {
        return "foo";
    }
    bar() {
        return "bar";
    }
}

let objA = new classA();
console.log(objA.foo(), objA.bar());

// Class B
let classB = class {
    constructor() {}
    hello() {
        return "hello";
    }
}

let objB = new classB();
console.log(objB.hello());

// Class C
let classC = class {
    constructor() {}
    world() {
        return "world";
    }
}

let objC = new classC();
console.log(objC.world());