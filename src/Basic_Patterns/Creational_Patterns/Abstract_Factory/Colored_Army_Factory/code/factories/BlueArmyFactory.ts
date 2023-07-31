import {ArmyFactory} from "./ArmyFactory";
import {Soldier} from "../products/interfaces/Soldier";
import {BlueSoldier} from "../products/concrete_products/blue_products/BlueSoldier";
import {Archer} from "../products/interfaces/Archer";
import {BlueArcher} from "../products/concrete_products/blue_products/BlueArcher";
import {Captain} from "../products/interfaces/Captain";
import {BlueCaptain} from "../products/concrete_products/blue_products/BlueCaptain";
import {Spy} from "../products/interfaces/Spy";
import {BlueSpy} from "../products/concrete_products/blue_products/BlueSpy";

/** Concrete Factory - It creates blue family objects. */
class BlueArmyFactory implements ArmyFactory {
    public createSoldier(): Soldier {
        return new BlueSoldier();
    }

    public createArcher(): Archer {
        return new BlueArcher();
    }

    public createCaptain(): Captain {
        return new BlueCaptain();
    }

    public createSpy(): Spy {
        return new BlueSpy();
    }
}

export { BlueArmyFactory };