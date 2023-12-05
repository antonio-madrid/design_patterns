import {Prototype} from "src/Basic_Patterns/Creational_Patterns/Prototype/JS_Concept/code/Prototype";

class ComponentWithBackReference {
    public prototype;

    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }
}

export {ComponentWithBackReference};