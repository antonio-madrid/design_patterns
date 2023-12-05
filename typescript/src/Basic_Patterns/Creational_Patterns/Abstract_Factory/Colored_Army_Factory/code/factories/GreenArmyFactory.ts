import {ArmyFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/factories/ArmyFactory";
import {Captain} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Captain";
import {GreenCaptain} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/concrete_products/green_products/GreenCaptain";
import {Soldier} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Soldier";
import {GreenSoldier} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/concrete_products/green_products/GreenSoldier";
import {Archer} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Archer";
import {GreenArcher} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/concrete_products/green_products/GreenArcher";
import {Spy} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Spy";
import {GreenSpy} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/concrete_products/green_products/GreenSpy";

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