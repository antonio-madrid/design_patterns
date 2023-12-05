import {ConcreteElementB} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Concept/code/elements/ConcreteElementB";
import {ConcreteElementA} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Concept/code/elements/ConcreteElementA";

interface Visitor {
    visitConcreteElementA(element: ConcreteElementA): void;
    visitConcreteElementB(element: ConcreteElementB): void;
}

export { Visitor };