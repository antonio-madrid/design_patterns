import {AbstractFactory} from "../factories/AbstractFactory";
import {ConcreteFactory1} from "../factories/ConcreteFactory1";
import {ConcreteFactory2} from "../factories/ConcreteFactory2";
import {AbstractProductA} from "../products/interfaces/AbstractProductA";
import {AbstractProductB} from "../products/interfaces/AbstractProductB";

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