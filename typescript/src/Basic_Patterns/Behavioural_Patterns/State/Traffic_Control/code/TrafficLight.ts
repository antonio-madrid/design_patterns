import {
    TrafficLightState
} from "src/Basic_Patterns/Behavioural_Patterns/State/Traffic_Control/code/state/TrafficLightState";
import {RedState} from "src/Basic_Patterns/Behavioural_Patterns/State/Traffic_Control/code/state/RedState";

/** Context class */
class TrafficLight {
    private state: TrafficLightState;

    constructor() {
        this.state = new RedState(this);
    }

    setState(state: TrafficLightState) {
        this.state = state;
    }

    change() {
        this.state.change();
    }

    sign(): string {
        return this.state.sign();
    }
}

export { TrafficLight };