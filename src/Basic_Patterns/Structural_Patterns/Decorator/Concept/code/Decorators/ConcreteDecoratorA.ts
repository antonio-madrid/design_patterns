import {Decorator} from "src/Basic_Patterns/Structural_Patterns/Decorator/Concept/code/Decorators/Decorator";

class ConcreteDecoratorA extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}

export { ConcreteDecoratorA };