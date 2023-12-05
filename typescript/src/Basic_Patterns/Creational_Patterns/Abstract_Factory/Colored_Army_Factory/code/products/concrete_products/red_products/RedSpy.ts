import {Spy} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Spy";

/** Concrete Product of the red family */
class RedSpy implements Spy {
    public gatherInfo(): void {
        console.log('Red spy is gathering information...');
    }
}

export { RedSpy };