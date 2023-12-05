package Basic_Patterns.Behavioural_Patterns.Visitor.Concept.code.Visitors;

import Basic_Patterns.Behavioural_Patterns.Visitor.Concept.code.Elements.ConcreteElementA;
import Basic_Patterns.Behavioural_Patterns.Visitor.Concept.code.Elements.ConcreteElementB;

public class ConcreteVisitor1 implements Visitor {
    @Override
    public void visit(ConcreteElementA element) {
        System.out.println(element.exclusiveMethodOfConcreteElementA() + " from ConcreteVisitor1");
    }

    @Override
    public void visit(ConcreteElementB element) {
        System.out.println(element.specialMethodOfConcreteElementB() + " from ConcreteVisitor1");
    }
}
