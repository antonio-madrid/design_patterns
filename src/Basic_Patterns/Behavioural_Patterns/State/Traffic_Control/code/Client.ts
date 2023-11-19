import {TrafficLight} from "src/Basic_Patterns/Behavioural_Patterns/State/Traffic_Control/code/TrafficLight";

const trafficLight = new TrafficLight();
console.log(trafficLight.sign()); // 'STOP'
trafficLight.change();
console.log(trafficLight.sign()); // 'GO'
trafficLight.change();
console.log(trafficLight.sign()); // 'CAUTION'
trafficLight.change();
