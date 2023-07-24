import {AbstractProductA} from "../interfaces/AbstractProductA";

class ConcreteProductA2 implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'The result of the product A2';
    }
}

export { ConcreteProductA2 };