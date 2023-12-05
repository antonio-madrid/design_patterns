import {
    DocumentElementVisitor
} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Document_app/code/visitors/DocumentElementVisitor";
import {Paragraph} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Document_app/code/elements/Paragraph";
import {Table} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Document_app/code/elements/Table";

/** Concrete Visitor */
class RenderVisitor implements DocumentElementVisitor {
    visitParagraph(paragraph: Paragraph) {
        console.log('Rendering a paragraph');
    }
    visitTable(table: Table) {
        console.log('Rendering a table');
    }
}

export { RenderVisitor };