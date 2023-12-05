import {Composite} from "src/Basic_Patterns/Structural_Patterns/Composite/Concept/code/Composite";
import {Leaf} from "src/Basic_Patterns/Structural_Patterns/Composite/Concept/code/Leaf";

const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());

tree.add(branch1);
tree.add(new Leaf());

tree.operation();