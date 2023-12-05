import {Soldier} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Soldier";
import {Archer} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Archer";
import {Captain} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Captain";
import {Spy} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Spy";

/** Abstract Factory */
interface ArmyFactory {
    createSoldier(): Soldier;
    createArcher(): Archer;
    createCaptain(): Captain;
    createSpy(): Spy;
}

export { ArmyFactory }