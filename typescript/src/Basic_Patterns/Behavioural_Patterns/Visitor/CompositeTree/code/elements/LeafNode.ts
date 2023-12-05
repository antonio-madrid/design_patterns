import {
    TreeNodeVisitor
} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/CompositeTree/code/visitors/TreeNodeVisitor";
import {TreeNode} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/CompositeTree/code/elements/TreeNode";

/** Concrete Element */
class LeafNode implements TreeNode {
    constructor(public name: string) {}

    accept(visitor: TreeNodeVisitor): void {
        visitor.visitLeaf(this);
    }
}

export { LeafNode };