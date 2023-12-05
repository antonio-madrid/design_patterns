import {ArmyFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/factories/ArmyFactory";
import {Spy} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Spy";
import {Archer} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Archer";
import {Soldier} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Soldier";
import {Captain} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/products/interfaces/Captain";
import {RedArmyFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/factories/RedArmyFactory";
import {BlueArmyFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/factories/BlueArmyFactory";
import {YellowArmyFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/factories/YellowArmyFactory";
import {GreenArmyFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Colored_Army_Factory/code/factories/GreenArmyFactory";

/** Part of the Client's code using a Factory to create a family of objects. */
function clientCode(factory: ArmyFactory): void {
    const captain: Captain = factory.createCaptain();
    captain.command();

    const soldier: Soldier = factory.createSoldier();
    soldier.groundAttack();

    const archer: Archer = factory.createArcher();
    archer.longDistanceAttack();

    const spy: Spy = factory.createSpy();
    spy.gatherInfo();
}

console.log('\nUsing the Red Army Factory: ');
clientCode(new RedArmyFactory());

console.log('\nUsing the Blue Army Factory: ');
clientCode(new BlueArmyFactory());

console.log('\nUsing the Yellow Army Factory: ');
clientCode(new YellowArmyFactory());

console.log('\nUsing the Green Army Factory: ');
clientCode(new GreenArmyFactory());