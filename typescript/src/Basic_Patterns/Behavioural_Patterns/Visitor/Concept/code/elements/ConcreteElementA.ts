import {Element} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Concept/code/elements/Element";
import {Visitor} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Concept/code/visitors/Visitor";

class ConcreteElementA implements Element {
    public accept(visitor: Visitor): void {
        visitor.visitConcreteElementA(this);
    }
    public exclusiveMethodOfConcreteElementA(): string {
        return 'A';
    }
}

export { ConcreteElementA };