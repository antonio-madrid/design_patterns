import {AbstractProductA} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/abstract_factory_conceptual/code/products/interfaces/AbstractProductA";

class ConcreteProductA2 implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'The result of the product A2';
    }
}

export { ConcreteProductA2 };