import {Observer} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Concept/code/observers/Observer";
import {Publisher} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Concept/code/publishers/Publisher";
import {ConcretePublisher} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Concept/code/publishers/ConcretePublisher";

class ConcreteObserverA implements Observer {
    public update(publisher: Publisher) {
        if (publisher instanceof ConcretePublisher && publisher.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }
}

export {ConcreteObserverA};