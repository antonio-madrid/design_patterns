import {TreeNode} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/CompositeTree/code/elements/TreeNode";
import {
    TreeNodeVisitor
} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/CompositeTree/code/visitors/TreeNodeVisitor";

/** Concrete Element */
class CompositeNode implements TreeNode {
    children: TreeNode[] = [];

    constructor(public name: string) {}

    accept(visitor: TreeNodeVisitor): void {
        visitor.visitComposite(this);
        this.children.forEach(child => child.accept(visitor));
    }

    addChild(child: TreeNode): void {
        this.children.push(child);
    }
}

export { CompositeNode };