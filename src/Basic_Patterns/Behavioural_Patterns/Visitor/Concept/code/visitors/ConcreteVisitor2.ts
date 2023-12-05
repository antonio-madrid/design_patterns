import {ConcreteElementA} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Concept/code/elements/ConcreteElementA";
import {Visitor} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Concept/code/visitors/Visitor";
import {ConcreteElementB} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Concept/code/elements/ConcreteElementB";

class ConcreteVisitor2 implements Visitor {
    public visitConcreteElementA(element: ConcreteElementA): void {
        console.log(`${element.exclusiveMethodOfConcreteElementA()} + ConcreteVisitor2`);
    }

    public visitConcreteElementB(element: ConcreteElementB): void {
        console.log(`${element.specialMethodOfConcreteElementB()} + ConcreteVisitor2`);
    }
}

export { ConcreteVisitor2 };