import {Product} from "./Product";

class ConcreteProduct2 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct2';
    }

}

export { ConcreteProduct2 };