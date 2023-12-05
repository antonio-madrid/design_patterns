import {
    AbstractFactory
} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/abstract_factory_conceptual/code/factories/AbstractFactory";
import {
    ConcreteFactory1
} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/abstract_factory_conceptual/code/factories/ConcreteFactory1";
import {
    ConcreteFactory2
} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/abstract_factory_conceptual/code/factories/ConcreteFactory2";
import {
    AbstractProductA
} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/abstract_factory_conceptual/code/products/interfaces/AbstractProductA";
import {
    AbstractProductB
} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/abstract_factory_conceptual/code/products/interfaces/AbstractProductB";

function clientCode(factory: AbstractFactory): void {
    const productA: AbstractProductA = factory.createProductA();
    const productB: AbstractProductB = factory.createProductB();

    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}

console.log('Client: Testing client code with the first factory type...');
clientCode(new ConcreteFactory1());

console.log('Client: Testing the same client code with the second factory type...');
clientCode(new ConcreteFactory2());