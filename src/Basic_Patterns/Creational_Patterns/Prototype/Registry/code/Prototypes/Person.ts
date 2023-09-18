import {Cloneable} from "./Cloneable";

/** Prototype */
class Person implements Cloneable {
    constructor(
        public name: string,
        public role: string) {}

    public clone(): Person {
        return new Person(this.name, this.role);
    }
}

export {Person};