import {Cloneable} from "src/Basic_Patterns/Creational_Patterns/Prototype/Registry/code/Prototypes/Cloneable";


class ConcretePrototype2 implements Cloneable {
    constructor(private id: number) {}

    public clone(): Cloneable {
        return new ConcretePrototype2(this.id);
    }
}

export {ConcretePrototype2};