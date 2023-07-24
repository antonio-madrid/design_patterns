import {Chair} from "../interfaces/Chair";
import {Sofa} from "../interfaces/Sofa";
import {CoffeTable} from "../interfaces/CoffeTable";

interface AbstractFactory {
    createChair(): Chair;
    createSofa(): Sofa;
    createCoffeTable(): CoffeTable;
}

export { AbstractFactory };