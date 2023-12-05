import {
    TemperatureObserver
} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Temperature_Monitor/code/observers/TemperatureObserver";

/** Subject */
class TemperatureSensor {
    private observers: TemperatureObserver[] = [];
    private temperature: number = 0;

    public setTemperature(temperature: number) {
        console.log(`TemperatureSensor: new temperature measurement: ${temperature}`);
        this.temperature = temperature;
        this.notifyObservers();
    }

    public subscribe(observer: TemperatureObserver) {
        this.observers.push(observer);
    }

    public unsubscribe(observer: TemperatureObserver) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    public notifyObservers() {
        for (const observer of this.observers) {
            observer.update(this.temperature);
        }
    }
}

export { TemperatureSensor };