import {ArmyFactory} from "./ArmyFactory";
import {Soldier} from "../products/interfaces/Soldier";
import {RedSoldier} from "../products/concrete_products/red_products/RedSoldier";
import {Archer} from "../products/interfaces/Archer";
import {RedArcher} from "../products/concrete_products/red_products/RedArcher";
import {Captain} from "../products/interfaces/Captain";
import {RedCaptain} from "../products/concrete_products/red_products/RedCaptain";
import {Spy} from "../products/interfaces/Spy";
import {RedSpy} from "../products/concrete_products/red_products/RedSpy";

/** Concrete Factory - It creates red family objects. */
class RedArmyFactory implements ArmyFactory {
    public createSoldier(): Soldier {
        return new RedSoldier();
    }

    public createArcher(): Archer {
        return new RedArcher();
    }

    public createCaptain(): Captain {
        return new RedCaptain();
    }

    public createSpy(): Spy {
        return new RedSpy();
    }
}

export { RedArmyFactory };