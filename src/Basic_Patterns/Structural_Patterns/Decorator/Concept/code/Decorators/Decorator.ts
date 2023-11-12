import {Component} from "src/Basic_Patterns/Structural_Patterns/Decorator/Concept/code/Component";

class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    public operation(): string {
        return this.component.operation();
    }
}

export { Decorator };