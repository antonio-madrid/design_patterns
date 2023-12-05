import {
    TreeNodeVisitor
} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/CompositeTree/code/visitors/TreeNodeVisitor";

/** Element Interface */
interface TreeNode {
    accept(visitor: TreeNodeVisitor): void;
}

export { TreeNode };