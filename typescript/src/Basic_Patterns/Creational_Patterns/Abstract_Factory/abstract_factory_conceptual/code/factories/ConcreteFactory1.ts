import {AbstractFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/abstract_factory_conceptual/code/factories/AbstractFactory";
import {AbstractProductA} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/abstract_factory_conceptual/code/products/interfaces/AbstractProductA";
import {AbstractProductB} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/abstract_factory_conceptual/code/products/interfaces/AbstractProductB";
import {ConcreteProductA1} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/abstract_factory_conceptual/code/products/concrete_products/ConcreteProductA1";
import {ConcreteProductB1} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/abstract_factory_conceptual/code/products/concrete_products/ConcreteProductB1";

class ConcreteFactory1 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}

export { ConcreteFactory1 };