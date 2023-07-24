import {Chair} from "../products/interfaces/Chair";
import {Sofa} from "../products/interfaces/Sofa";
import {CoffeTable} from "../products/interfaces/CoffeTable";

interface AbstractFactory {
    createChair(): Chair;
    createSofa(): Sofa;
    createCoffeTable(): CoffeTable;
}

export { AbstractFactory };