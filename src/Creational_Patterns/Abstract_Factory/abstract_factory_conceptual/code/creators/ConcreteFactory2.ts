import {AbstractFactory} from "./AbstractFactory";
import {AbstractProductA} from "../products/interfaces/AbstractProductA";
import {ConcreteProductA2} from "../products/concrete_products/ConcreteProductA2";
import {AbstractProductB} from "../products/interfaces/AbstractProducB";
import {ConcreteProductB2} from "../products/concrete_products/ConcreteProductB2";

class ConcreteFactory2 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}

export { ConcreteFactory2 };