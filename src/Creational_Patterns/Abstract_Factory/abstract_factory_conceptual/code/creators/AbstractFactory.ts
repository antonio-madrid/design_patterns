import {AbstractProductA} from "../products/interfaces/AbstractProductA";
import {AbstractProductB} from "../products/interfaces/AbstractProductB";

interface AbstractFactory {
    createProductA(): AbstractProductA;
    createProductB(): AbstractProductB;
}

export { AbstractFactory };