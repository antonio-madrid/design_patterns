import {
    DocumentElement
} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Document_app/code/elements/DocumentElement";
import {Paragraph} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Document_app/code/elements/Paragraph";
import {Table} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Document_app/code/elements/Table";
import {RenderVisitor} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Document_app/code/visitors/RenderVisitor";

const documentElement: DocumentElement[] = [
    new Paragraph(),
    new Table()
];

const renderVisitor = new RenderVisitor();

documentElement.forEach(element => element.accept(renderVisitor));