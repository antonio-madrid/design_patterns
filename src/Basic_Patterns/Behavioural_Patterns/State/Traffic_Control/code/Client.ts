import {TrafficLight} from "src/Basic_Patterns/Behavioural_Patterns/State/Traffic_Control/code/TrafficLight";

const traffictLight = new TrafficLight();
console.log(traffictLight.sign()); // 'STOP'
traffictLight.change();
console.log(traffictLight.sign()); // 'GO'
traffictLight.change();
console.log(traffictLight.sign()); // 'CAUTION'
traffictLight.change();
