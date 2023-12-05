import {
    TreeNodeVisitor
} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/CompositeTree/code/visitors/TreeNodeVisitor";
import {LeafNode} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/CompositeTree/code/elements/LeafNode";
import {CompositeNode} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/CompositeTree/code/elements/CompositeNode";

/** Concrete Visitor */
class OperationVisitor implements  TreeNodeVisitor {
    visitLeaf(leaf: LeafNode): void {
        console.log('Performing operation on leaf node');
    }

    visitComposite(composite: CompositeNode): void {
        console.log('Performing operation on composite node');
    }
}

export { OperationVisitor };