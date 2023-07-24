import {AbstractProductA} from "../interfaces/AbstractProductA";
import {AbstractProductB} from "../interfaces/AbstractProductB";

class ConcreteProductB1 implements AbstractProductB {
    public usefulFunctionB(): string {
        return 'The result of the product B1';
    }

    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result: string = collaborator.usefulFunctionA();
        return `The result of B1 collaborating with the (${result})`;
    }
}

export { ConcreteProductB1 };
