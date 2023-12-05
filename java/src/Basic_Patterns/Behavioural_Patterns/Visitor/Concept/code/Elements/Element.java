package Basic_Patterns.Behavioural_Patterns.Visitor.Concept.code.Elements;

import Basic_Patterns.Behavioural_Patterns.Visitor.Concept.code.Visitors.Visitor;

public interface Element {
    void accept(Visitor visitor);
}