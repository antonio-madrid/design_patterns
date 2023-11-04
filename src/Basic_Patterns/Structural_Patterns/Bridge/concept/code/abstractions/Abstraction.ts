import {Implementation} from "src/Basic_Patterns/Structural_Patterns/Bridge/concept/code/implementations/Implementation";

class Abstraction {
    protected implementation: Implementation;

    constructor(implementation: Implementation) {
        this.implementation = implementation;
    }

    public operation(): string {
        const result = this.implementation.operationImplementation();
        return `Abstraction: Base operation with:\n${result}`;
    }
}

export { Abstraction };