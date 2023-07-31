import {ArmyFactory} from "./ArmyFactory";
import {Captain} from "../products/interfaces/Captain";
import {GreenCaptain} from "../products/concrete_products/green_products/GreenCaptain";
import {Soldier} from "../products/interfaces/Soldier";
import {GreenSoldier} from "../products/concrete_products/green_products/GreenSoldier";
import {Archer} from "../products/interfaces/Archer";
import {GreenArcher} from "../products/concrete_products/green_products/GreenArcher";
import {Spy} from "../products/interfaces/Spy";
import {GreenSpy} from "../products/concrete_products/green_products/GreenSpy";

/** Concrete Factory - It creates green family objects. */
class GreenArmyFactory implements ArmyFactory {

    public createSoldier(): Soldier {
        return new GreenSoldier();
    }

    public createArcher(): Archer {
        return new GreenArcher();
    }

    public createCaptain(): Captain {
        return new GreenCaptain();
    }

    public createSpy(): Spy {
        return new GreenSpy();
    }
}

export { GreenArmyFactory };