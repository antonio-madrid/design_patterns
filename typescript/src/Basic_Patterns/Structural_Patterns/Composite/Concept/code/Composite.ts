import {Component} from "src/Basic_Patterns/Structural_Patterns/Composite/Concept/code/Component";

class Composite implements Component {
    private children: Component[] = [];

    public operation() {
        for (const child of this.children) {
            child.operation();
        }
    }

    public add(component: Component) {
        this.children.push(component);
    }

    public remove(component: Component) {
        this.children = this.children.filter((child) => child !== component);
    }

    public getChildren(): Component[] {
        return this.children;
    }
}

export { Composite };