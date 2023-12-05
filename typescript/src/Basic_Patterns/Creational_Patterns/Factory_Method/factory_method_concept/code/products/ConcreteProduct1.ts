import {Product} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/factory_method_concept/code/products/Product";

class ConcreteProduct1 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct1}';
    }
}

export { ConcreteProduct1 };