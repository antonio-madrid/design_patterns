import {Soldier} from "../products/interfaces/Soldier";
import {Archer} from "../products/interfaces/Archer";
import {Captain} from "../products/interfaces/Captain";
import {Spy} from "../products/interfaces/Spy";

/** Abstract Factory */
interface ArmyFactory {
    createSoldier(): Soldier;
    createArcher(): Archer;
    createCaptain(): Captain;
    createSpy(): Spy;
}

export { ArmyFactory }