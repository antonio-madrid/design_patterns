import {AbstractFactory} from "./AbstractFactory";
import {AbstractProductA} from "../products/interfaces/AbstractProductA";
import {AbstractProductB} from "../products/interfaces/AbstractProductB";
import {ConcreteProductA1} from "../products/concrete_products/ConcreteProductA1";
import {ConcreteProductB1} from "../products/concrete_products/ConcreteProductB1";

class ConcreteFactory1 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}

export { ConcreteFactory1 };