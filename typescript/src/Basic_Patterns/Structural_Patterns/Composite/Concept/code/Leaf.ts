import {Component} from "src/Basic_Patterns/Structural_Patterns/Composite/Concept/code/Component";

class Leaf implements Component {
    public operation() {
        console.log("Leaf operation");
    }
}

export { Leaf };