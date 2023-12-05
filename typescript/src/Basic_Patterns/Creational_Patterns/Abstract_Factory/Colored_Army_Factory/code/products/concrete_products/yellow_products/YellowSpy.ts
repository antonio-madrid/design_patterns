import {Spy} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Spy";

/** Concrete Product of the yellow family */
class YellowSpy implements Spy {
    public gatherInfo(): void {
        console.log('Yellow spy is gathering information...');
    }
}

export { YellowSpy };