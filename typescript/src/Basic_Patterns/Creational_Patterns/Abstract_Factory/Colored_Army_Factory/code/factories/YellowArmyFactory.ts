import {ArmyFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/factories/ArmyFactory";
import {Soldier} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Soldier";
import {YellowSoldier} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/concrete_products/yellow_products/YellowSoldier";
import {Archer} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Archer";
import {YellowArcher} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/concrete_products/yellow_products/YellowArcher";
import {Captain} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Captain";
import {YellowCaptain} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/concrete_products/yellow_products/YellowCaptain";
import {Spy} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Spy";
import {YellowSpy} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/concrete_products/yellow_products/YellowSpy";

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