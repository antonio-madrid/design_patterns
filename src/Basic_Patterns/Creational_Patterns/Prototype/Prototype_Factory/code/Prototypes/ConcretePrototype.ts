import {Cloneable} from "./Cloneable";


class ConcretePrototype implements Cloneable {
    constructor(private name: string) {}

    public clone(): Cloneable {
        return new ConcretePrototype(this.name);
    }
}

export {ConcretePrototype};