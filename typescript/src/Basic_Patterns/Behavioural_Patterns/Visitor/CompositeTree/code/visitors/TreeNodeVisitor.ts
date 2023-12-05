import {LeafNode} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/CompositeTree/code/elements/LeafNode";
import {CompositeNode} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/CompositeTree/code/elements/CompositeNode";

/** Visitor Interface */
interface TreeNodeVisitor {
    visitLeaf(leaf: LeafNode): void;
    visitComposite(composite: CompositeNode): void;
}

export { TreeNodeVisitor };