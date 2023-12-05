import {AbstractProductA} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/abstract_factory_conceptual/code/products/interfaces/AbstractProductA";
import {AbstractProductB} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/abstract_factory_conceptual/code/products/interfaces/AbstractProductB";

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
