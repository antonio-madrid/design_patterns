import {Element} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Concept/code/elements/Element";
import {Visitor} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Concept/code/visitors/Visitor";
import {ConcreteElementB} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Concept/code/elements/ConcreteElementB";
import {ConcreteElementA} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Concept/code/elements/ConcreteElementA";
import {ConcreteVisitor1} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Concept/code/visitors/ConcreteVisitor1";
import {ConcreteVisitor2} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Concept/code/visitors/ConcreteVisitor2";

function clientCode(elements: Element[], visitor: Visitor) {
    for (const component of elements) {
        component.accept(visitor);
    }
}

const elements = [
    new ConcreteElementA(),
    new ConcreteElementB(),
];

console.log('The client code works with all visitors via the base Visitor interface:');
const visitor1 = new ConcreteVisitor1();
clientCode(elements, visitor1);
console.log('');

console.log('It allows the same client code to work with different types of visitors:');
const visitor2 = new ConcreteVisitor2();
clientCode(elements, visitor2);
