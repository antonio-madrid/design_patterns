import {Creator} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/factory_method_concept/code/creators/Creator";
import {Product} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/factory_method_concept/code/products/Product";
import {ConcreteProduct2} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/factory_method_concept/code/products/ConcreteProduct2";

class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}

export { ConcreteCreator2 };