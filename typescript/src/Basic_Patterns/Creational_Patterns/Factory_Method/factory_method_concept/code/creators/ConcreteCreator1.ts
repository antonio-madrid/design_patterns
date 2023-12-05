import {Creator} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/factory_method_concept/code/creators/Creator";
import {Product} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/factory_method_concept/code/products/Product";
import {ConcreteProduct1} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/factory_method_concept/code/products/ConcreteProduct1";

class ConcreteCreator1 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

export { ConcreteCreator1 };