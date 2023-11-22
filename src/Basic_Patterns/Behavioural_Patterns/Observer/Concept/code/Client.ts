import {ConcreteSubject} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Concept/code/subjects/ConcreteSubject";
import {ConcreteObserverA} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Concept/code/observers/ConcreteObserverA";
import {ConcreteObserverB} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Concept/code/observers/ConcreteObserverB";

const subject = new ConcreteSubject();

const observer1 = new ConcreteObserverA();
subject.attach(observer1);

const observer2 = new ConcreteObserverB();
subject.attach(observer2);

subject.someBusinessLogic();
subject.someBusinessLogic();

subject.detach(observer2);

subject.someBusinessLogic();
