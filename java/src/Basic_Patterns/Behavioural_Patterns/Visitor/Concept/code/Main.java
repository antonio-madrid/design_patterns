package Basic_Patterns.Behavioural_Patterns.Visitor.Concept.code;

import Basic_Patterns.Behavioural_Patterns.Visitor.Concept.code.Elements.ConcreteElementA;
import Basic_Patterns.Behavioural_Patterns.Visitor.Concept.code.Elements.ConcreteElementB;
import Basic_Patterns.Behavioural_Patterns.Visitor.Concept.code.Elements.Element;
import Basic_Patterns.Behavioural_Patterns.Visitor.Concept.code.Visitors.ConcreteVisitor1;
import Basic_Patterns.Behavioural_Patterns.Visitor.Concept.code.Visitors.ConcreteVisitor2;
import Basic_Patterns.Behavioural_Patterns.Visitor.Concept.code.Visitors.Visitor;

public class Main {
    public static void main(String[] args) {

        Element[] elements = new Element[] {
                new ConcreteElementA(),
                new ConcreteElementB()
        };

        Visitor[] visitors = new Visitor[] {
                new ConcreteVisitor1(),
                new ConcreteVisitor2()
        };

        for (Element element : elements) {
            for (Visitor visitor : visitors) {
                element.accept(visitor);
            }
        }
    }
}
