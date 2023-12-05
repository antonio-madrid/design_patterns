package Basic_Patterns.Behavioural_Patterns.Visitor.Concept.code.Elements;

import Basic_Patterns.Behavioural_Patterns.Visitor.Concept.code.Visitors.Visitor;

public class ConcreteElementA implements Element {
    @Override
    public void accept(Visitor visitor) {
        visitor.visit(this);
    }

    public String exclusiveMethodOfConcreteElementA() {
        return "A";
    }
}