import {
    TemperatureSensor
} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Temperature_Monitor/code/subjects/TemperatureSensor";
import {Fan} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Temperature_Monitor/code/observers/Fan";

const sensor = new TemperatureSensor();
const fan = new Fan();

sensor.subscribe(fan);
sensor.setTemperature(30);
sensor.setTemperature(20);
