import {Table} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Document_app/code/elements/Table";
import {Paragraph} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Document_app/code/elements/Paragraph";

/** Visitor Interface */
interface DocumentElementVisitor {
    visitParagraph(paragraph: Paragraph): void;
    visitTable(table: Table): void;
}

export { DocumentElementVisitor };