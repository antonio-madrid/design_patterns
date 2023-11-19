import {BaseConcreteState} from "src/Basic_Patterns/Behavioural_Patterns/State/Concept/code/state/BaseConcreteState";
import {State} from "src/Basic_Patterns/Behavioural_Patterns/State/Concept/code/state/State";

class Context {
    private state!: State;

    constructor(state: BaseConcreteState) {
        this.transitionTo(state);
    }

    public transitionTo(state: BaseConcreteState): void {
        console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
        this.state = state;
        this.state.setContext(this);
    }

    public request1(): void {
        this.state.handle1();
    }

    public request2(): void {
        this.state.handle2();
    }

}

export { Context };