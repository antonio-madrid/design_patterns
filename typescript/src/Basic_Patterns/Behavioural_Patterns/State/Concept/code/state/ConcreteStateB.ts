import {BaseConcreteState} from "src/Basic_Patterns/Behavioural_Patterns/State/Concept/code/state/BaseConcreteState";
import {ConcreteStateA} from "src/Basic_Patterns/Behavioural_Patterns/State/Concept/code/state/ConcreteStateA";

class ConcreteStateB extends BaseConcreteState {
    public handle1() {
        console.log('ConcreteStateB handles request1.');
    }

    public handle2() {
        console.log('ConcreteStateB handles request2.');
        console.log('ConcreteStateB wants to change the state of the context.');
        this.context.transitionTo(new ConcreteStateA());
    }
}

export { ConcreteStateB };