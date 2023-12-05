import {Implementation} from "src/Basic_Patterns/Structural_Patterns/Bridge/concept/code/implementations/Implementation";

class ConcreteImplementationA implements Implementation {
    public operationImplementation(): string {
        return 'ConcreteImplementationA: Here\'s the result on the platform A.';
    }
}

export { ConcreteImplementationA };