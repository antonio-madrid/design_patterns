import {Visitor} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Concept/code/visitors/Visitor";
import {Element} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Concept/code/elements/Element";

class ConcreteElementB implements Element {
    public accept(visitor: Visitor): void {
        visitor.visitConcreteElementB(this);
    }

    public specialMethodOfConcreteElementB(): string {
        return 'B';
    }
}

export { ConcreteElementB };