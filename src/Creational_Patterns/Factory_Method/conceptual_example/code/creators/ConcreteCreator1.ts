import {Creator} from "./Creator";
import {Product} from "../products/Product";
import {ConcreteProduct1} from "../products/ConcreteProduct1";

class ConcreteCreator1 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

export { ConcreteCreator1 };