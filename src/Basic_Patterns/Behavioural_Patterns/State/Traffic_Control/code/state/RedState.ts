import {
    TrafficLightState
} from "src/Basic_Patterns/Behavioural_Patterns/State/Traffic_Control/code/state/TrafficLightState";
import {TrafficLight} from "src/Basic_Patterns/Behavioural_Patterns/State/Traffic_Control/code/TrafficLight";
import {GreenState} from "src/Basic_Patterns/Behavioural_Patterns/State/Traffic_Control/code/state/GreenState";

class RedState implements TrafficLightState {
    constructor(private light: TrafficLight) {}

    change() {
        this.light.setState(new GreenState(this.light));
    }

    sign(): string {
        return 'STOP';
    }
}

export { RedState };