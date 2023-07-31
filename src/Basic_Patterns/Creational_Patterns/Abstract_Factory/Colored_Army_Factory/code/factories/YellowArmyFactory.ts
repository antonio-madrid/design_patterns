import {ArmyFactory} from "./ArmyFactory";
import {Soldier} from "../products/interfaces/Soldier";
import {YellowSoldier} from "../products/concrete_products/yellow_products/YellowSoldier";
import {Archer} from "../products/interfaces/Archer";
import {YellowArcher} from "../products/concrete_products/yellow_products/YellowArcher";
import {Captain} from "../products/interfaces/Captain";
import {YellowCaptain} from "../products/concrete_products/yellow_products/YellowCaptain";
import {Spy} from "../products/interfaces/Spy";
import {YellowSpy} from "../products/concrete_products/yellow_products/YellowSpy";

/** Concrete Factory - It creates yellow family objects. */
class YellowArmyFactory implements ArmyFactory {
    public createSoldier(): Soldier {
        return new YellowSoldier();
    }

    public createArcher(): Archer {
        return new YellowArcher();
    }

    public createCaptain(): Captain {
        return new YellowCaptain();
    }

    public createSpy(): Spy {
        return new YellowSpy();
    }
}

export { YellowArmyFactory };