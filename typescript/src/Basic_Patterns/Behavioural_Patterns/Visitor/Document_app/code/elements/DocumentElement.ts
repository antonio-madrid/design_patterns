import {
    DocumentElementVisitor
} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Document_app/code/visitors/DocumentElementVisitor";

/** Element Interface */
interface DocumentElement {
    accept(visitor: DocumentElementVisitor): void;
}

export { DocumentElement };