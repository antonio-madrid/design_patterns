import {Creator} from "./Creator";
import {Product} from "../products/Product";
import {ConcreteProduct2} from "../products/ConcreteProduct2";

class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}

export { ConcreteCreator2 };