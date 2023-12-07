import {
    ControlTower
} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Air_Traffic_Control/code/mediators/ControlTower";
import {Airplane} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Air_Traffic_Control/code/components/Airplane";

const tower = new ControlTower();
const plane1 = new Airplane(1, tower);
const plane2 = new Airplane(2, tower);

plane1.sendMessage('Ascending to 10,000 feet');
plane2.sendMessage('Descending to land');
