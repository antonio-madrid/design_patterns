import {AbstractProductA} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/abstract_factory_conceptual/code/products/interfaces/AbstractProductA";

interface AbstractProductB {
    usefulFunctionB(): string;
    anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}

export { AbstractProductB };