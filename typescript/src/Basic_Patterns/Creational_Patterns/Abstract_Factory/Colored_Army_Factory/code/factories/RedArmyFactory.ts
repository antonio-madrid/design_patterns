import {ArmyFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/factories/ArmyFactory";
import {Soldier} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Soldier";
import {RedSoldier} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/concrete_products/red_products/RedSoldier";
import {Archer} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Archer";
import {RedArcher} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/concrete_products/red_products/RedArcher";
import {Captain} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Captain";
import {RedCaptain} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/concrete_products/red_products/RedCaptain";
import {Spy} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Spy";
import {RedSpy} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/concrete_products/red_products/RedSpy";

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