import {
    TrafficLightState
} from "src/Basic_Patterns/Behavioural_Patterns/State/Traffic_Control/code/state/TrafficLightState";
import {RedState} from "src/Basic_Patterns/Behavioural_Patterns/State/Traffic_Control/code/state/RedState";
import {TrafficLight} from "src/Basic_Patterns/Behavioural_Patterns/State/Traffic_Control/code/TrafficLight";

class YellowState implements TrafficLightState {
    constructor(private light: TrafficLight) {}

    change() {
        this.light.setState(new RedState(this.light));
    }

    sign(): string {
        return 'CAUTION';
    }
}

export { YellowState };