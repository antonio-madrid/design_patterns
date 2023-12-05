import {
    DocumentElement
} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Document_app/code/elements/DocumentElement";
import {
    DocumentElementVisitor
} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Document_app/code/visitors/DocumentElementVisitor";

/** Concrete Element */
class Table implements DocumentElement {
    accept(visitor: DocumentElementVisitor) {
        visitor.visitTable(this);
    }
}

export { Table };