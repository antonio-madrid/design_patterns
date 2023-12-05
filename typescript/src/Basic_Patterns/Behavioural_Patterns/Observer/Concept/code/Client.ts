import {ConcretePublisher} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Concept/code/publishers/ConcretePublisher";
import {ConcreteObserverA} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Concept/code/observers/ConcreteObserverA";
import {ConcreteObserverB} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Concept/code/observers/ConcreteObserverB";

const publisher = new ConcretePublisher();

const observer1 = new ConcreteObserverA();
publisher.attach(observer1);

const observer2 = new ConcreteObserverB();
publisher.attach(observer2);

publisher.someBusinessLogic();
publisher.someBusinessLogic();

publisher.detach(observer2);

publisher.someBusinessLogic();
