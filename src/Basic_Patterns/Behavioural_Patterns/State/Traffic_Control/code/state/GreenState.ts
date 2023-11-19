import {
    TrafficLightState
} from "src/Basic_Patterns/Behavioural_Patterns/State/Traffic_Control/code/state/TrafficLightState";
import {TrafficLight} from "src/Basic_Patterns/Behavioural_Patterns/State/Traffic_Control/code/TrafficLight";
import {YellowState} from "src/Basic_Patterns/Behavioural_Patterns/State/Traffic_Control/code/state/YellowState";

/** Concrete State */
class GreenState implements TrafficLightState {
    constructor(private light: TrafficLight) {}

    change() {
        this.light.setState(new YellowState(this.light));
    }

    sign(): string {
        return 'GO';
    }
}

export { GreenState };