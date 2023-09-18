import {Cloneable} from "./Cloneable";

/** Prototype class */
class Person implements Cloneable {
    constructor(
        public name: string,
        public age: number,
        public skills: string[],
        ) {}

    public clone(): Person {
        return new Person(this.name, this.age, [...this.skills]);
    }
}

export {Person};