import {Implementation} from "src/Basic_Patterns/Structural_Patterns/Bridge/concept/code/implementations/Implementation";

class ConcreteImplementationB implements Implementation {
    public operationImplementation(): string {
        return 'ConcreteImplementationB: Here\'s the result on the platform B.';
    }
}

export { ConcreteImplementationB };