import {TreeNode} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/CompositeTree/code/elements/TreeNode";
import {CompositeNode} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/CompositeTree/code/elements/CompositeNode";
import {
    OperationVisitor
} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/CompositeTree/code/visitors/OperationVisitor";
import {LeafNode} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/CompositeTree/code/elements/LeafNode";

// Build the tree
const root = new CompositeNode('Root');
const child1 = new CompositeNode('Child1');
const child2 = new CompositeNode('Child2');
const leaf1 = new LeafNode('Leaf1');
const leaf2 = new LeafNode('Leaf2');
const leaf3 = new LeafNode('Leaf3');

// Building the tree structure
root.addChild(child1);
root.addChild(leaf1);
child1.addChild(child2);
child1.addChild(leaf2);
child2.addChild(leaf3);

// Creating the Tree reference
const tree: TreeNode = root;

// Instantiate the Visitor
const operationVisitor = new OperationVisitor();

// Run the Visitor over the tree
tree.accept(operationVisitor);