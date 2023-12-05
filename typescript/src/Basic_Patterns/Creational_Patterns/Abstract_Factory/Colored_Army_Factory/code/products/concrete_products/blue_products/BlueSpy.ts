import {Spy} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Spy";

/** Concrete Product of the blue family */
class BlueSpy implements Spy {
    public gatherInfo(): void {
        console.log('Blue spy is gathering information...');
    }
}

export { BlueSpy };