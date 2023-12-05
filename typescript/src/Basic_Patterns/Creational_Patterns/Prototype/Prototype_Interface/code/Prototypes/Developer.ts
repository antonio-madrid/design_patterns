import {Person} from "src/Basic_Patterns/Creational_Patterns/Prototype/Prototype_Interface/code/Prototypes/Person";

/** Prototype subclass */
class Developer extends Person {
    constructor(name: string, age: number, skills: string[],
        public position: string,
        ) {
        super(name, age, skills);
    }

    public clone(): Developer {
        return new Developer(this.name, this.age, [...this.skills], this.position);
    }
}

export {Developer};