import {Decorator} from "src/Basic_Patterns/Structural_Patterns/Decorator/Concept/code/Decorators/Decorator";

class ConcreteDecoratorB extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorB(${super.operation()})`;
    }
}

export { ConcreteDecoratorB };