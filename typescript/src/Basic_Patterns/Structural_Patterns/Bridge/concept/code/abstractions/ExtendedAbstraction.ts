import {Abstraction} from "src/Basic_Patterns/Structural_Patterns/Bridge/concept/code/abstractions/Abstraction";

class ExtendedAbstraction extends Abstraction {
    public operation(): string {
        const result = this.implementation.operationImplementation();
        return `ExtendedAbstraction: Extended operation with:\n${result}`;
    }
}

export { ExtendedAbstraction };