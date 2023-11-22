import {Observer} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Concept/code/observers/Observer";
import {Subject} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Concept/code/subjects/Subject";
import {ConcreteSubject} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Concept/code/subjects/ConcreteSubject";

class ConcreteObserverB implements Observer {
    public update(subject: Subject) {
        if (subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2)) {
            console.log('ConcreteObserverB: Reacted to the event.');
        }
    }
}

export {ConcreteObserverB};