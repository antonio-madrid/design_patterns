package Basic_Patterns.Behavioural_Patterns.Visitor.Concept.code.Visitors;

import Basic_Patterns.Behavioural_Patterns.Visitor.Concept.code.Elements.ConcreteElementA;
import Basic_Patterns.Behavioural_Patterns.Visitor.Concept.code.Elements.ConcreteElementB;

public class ConcreteVisitor2 implements Visitor {
    @Override
    public void visit(ConcreteElementA element) {
        System.out.println(element.exclusiveMethodOfConcreteElementA() + " + ConcreteVisitor2");
    }

    @Override
    public void visit(ConcreteElementB element) {
        System.out.println(element.specialMethodOfConcreteElementB() + " + ConcreteVisitor2");
    }
}
