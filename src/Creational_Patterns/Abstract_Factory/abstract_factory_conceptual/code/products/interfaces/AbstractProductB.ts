import {AbstractProductA} from "./AbstractProductA";

interface AbstractProductB {
    usefulFunctionB(): string;
    anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}

export { AbstractProductB };