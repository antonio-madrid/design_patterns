import {Cloneable} from "src/Basic_Patterns/Creational_Patterns/Prototype/Registry/code/Prototypes/Cloneable";


class ConcretePrototype implements Cloneable {
    constructor(private name: string) {}

    public clone(): Cloneable {
        return new ConcretePrototype(this.name);
    }
}

export {ConcretePrototype};