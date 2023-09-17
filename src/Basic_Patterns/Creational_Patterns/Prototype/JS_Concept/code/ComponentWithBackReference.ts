import {Prototype} from "./Prototype";

class ComponentWithBackReference {
    public prototype;

    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }
}

export {ComponentWithBackReference};