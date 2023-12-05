import {ConcreteElementA} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Concept/code/elements/ConcreteElementA";
import {ConcreteElementB} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Concept/code/elements/ConcreteElementB";
import {Visitor} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Concept/code/visitors/Visitor";

class ConcreteVisitor1 implements Visitor {
    public visitConcreteElementA(element: ConcreteElementA): void {
        console.log(`${element.exclusiveMethodOfConcreteElementA()} from ConcreteVisitor1`);
    }

    public visitConcreteElementB(element: ConcreteElementB): void {
        console.log(`${element.specialMethodOfConcreteElementB()} from ConcreteVisitor1`);
    }
}

export { ConcreteVisitor1 };