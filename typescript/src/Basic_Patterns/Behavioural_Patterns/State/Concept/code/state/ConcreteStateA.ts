import {BaseConcreteState} from "src/Basic_Patterns/Behavioural_Patterns/State/Concept/code/state/BaseConcreteState";
import {ConcreteStateB} from "src/Basic_Patterns/Behavioural_Patterns/State/Concept/code/state/ConcreteStateB";

class ConcreteStateA extends BaseConcreteState {
    public handle1() {
        console.log('ConcreteStateA handles request1.');
        console.log('ConcreteStateA wants to change the state of the context.');
        this.context.transitionTo(new ConcreteStateB());
    }

    public handle2() {
        console.log('ConcreteStateA handles request2.');
    }
}

export { ConcreteStateA };