import {State} from "src/Basic_Patterns/Behavioural_Patterns/State/Concept/code/state/State";
import {Context} from "src/Basic_Patterns/Behavioural_Patterns/State/Concept/code/Context";

abstract class BaseConcreteState implements State {
    protected context!: Context;

    public setContext(context: Context) {
        this.context = context;
    }

    public handle1(): void { }

    public handle2(): void { }
}

export { BaseConcreteState };
