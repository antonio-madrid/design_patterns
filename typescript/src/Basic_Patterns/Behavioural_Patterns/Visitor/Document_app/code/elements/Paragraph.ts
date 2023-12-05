import {
    DocumentElement
} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Document_app/code/elements/DocumentElement";
import {
    DocumentElementVisitor
} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Document_app/code/visitors/DocumentElementVisitor";

/** Concrete Element */
class Paragraph implements DocumentElement {
    accept(visitor: DocumentElementVisitor) {
        visitor.visitParagraph(this);
    }
}

export { Paragraph };