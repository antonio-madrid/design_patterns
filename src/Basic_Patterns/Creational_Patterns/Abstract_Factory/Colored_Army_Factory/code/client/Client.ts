import {ArmyFactory} from "../factories/ArmyFactory";
import {Spy} from "../products/interfaces/Spy";
import {Archer} from "../products/interfaces/Archer";
import {Soldier} from "../products/interfaces/Soldier";
import {Captain} from "../products/interfaces/Captain";
import {RedArmyFactory} from "../factories/RedArmyFactory";
import {BlueArmyFactory} from "../factories/BlueArmyFactory";
import {YellowArmyFactory} from "../factories/YellowArmyFactory";
import {GreenArmyFactory} from "../factories/GreenArmyFactory";

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