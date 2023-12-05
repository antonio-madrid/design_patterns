import {
    TemperatureObserver
} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Temperature_Monitor/code/observers/TemperatureObserver";

/** Concrete Observer */
class Fan implements TemperatureObserver {
    public update(temperature: number) {
        if (temperature > 25) {
            console.log("Fan: It's hot here, turning on the fan!");
        } else {
            console.log("Fan: Temp is fine, keeping the fan off.");
        }
    }
}

export { Fan };