import {ArmyFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/factories/ArmyFactory";
import {Soldier} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Soldier";
import {BlueSoldier} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/concrete_products/blue_products/BlueSoldier";
import {Archer} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Archer";
import {BlueArcher} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/concrete_products/blue_products/BlueArcher";
import {Captain} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Captain";
import {BlueCaptain} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/concrete_products/blue_products/BlueCaptain";
import {Spy} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Spy";
import {BlueSpy} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/concrete_products/blue_products/BlueSpy";

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