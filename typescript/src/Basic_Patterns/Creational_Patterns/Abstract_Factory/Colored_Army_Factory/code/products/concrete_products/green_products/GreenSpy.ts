import {Spy} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Spy";

/** Concrete Product of the green family */
class GreenSpy implements Spy {
    public gatherInfo(): void {
        console.log('Green spy is gathering information...');
    }
}

export { GreenSpy };