package Basic_Patterns.Behavioural_Patterns.Visitor.Concept.code.Visitors;

import Basic_Patterns.Behavioural_Patterns.Visitor.Concept.code.Elements.ConcreteElementA;
import Basic_Patterns.Behavioural_Patterns.Visitor.Concept.code.Elements.ConcreteElementB;

public interface Visitor {
    void visit(ConcreteElementA element);
    void visit(ConcreteElementB element);
}