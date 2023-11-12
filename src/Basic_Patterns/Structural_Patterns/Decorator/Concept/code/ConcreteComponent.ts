import {Component} from "src/Basic_Patterns/Structural_Patterns/Decorator/Concept/code/Component";

class ConcreteComponent implements Component {
    public operation(): string {
        return "ConcreteComponent";
    }
}

export { ConcreteComponent };