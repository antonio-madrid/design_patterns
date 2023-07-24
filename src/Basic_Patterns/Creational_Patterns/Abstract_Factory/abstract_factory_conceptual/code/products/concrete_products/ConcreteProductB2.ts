
import {AbstractProductA} from "../interfaces/AbstractProductA";
import {AbstractProductB} from "../interfaces/AbstractProductB";

class ConcreteProductB2 implements AbstractProductB {
    public usefulFunctionB(): string {
        return 'The result of the product B2';
    }

    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result: string = collaborator.usefulFunctionA();
        return `The result of the B2 collaborating with the (${result})`;
    }
}

export { ConcreteProductB2 };