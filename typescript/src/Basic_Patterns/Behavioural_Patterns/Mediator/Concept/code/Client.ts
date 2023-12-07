import {Component1} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Concept/code/components/Component1";
import {Component2} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Concept/code/components/Component2";
import {
    ConcreteMediator
} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Concept/code/mediators/ConcreteMediator";

const component1 = new Component1();
const component2 = new Component2();
const mediator = new ConcreteMediator(component1, component2);

console.log('Client triggers operation A.');
component1.doA();

console.log('');
console.log('Client triggers operation D.');
component2.doD();
