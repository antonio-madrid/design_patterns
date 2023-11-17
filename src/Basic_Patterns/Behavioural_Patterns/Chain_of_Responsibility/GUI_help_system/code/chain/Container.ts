import {
    Component
} from "src/Basic_Patterns/Behavioural_Patterns/Chain_of_Responsibility/GUI_help_system/code/chain/Component";

/** Composite Concrete Handler */
abstract class Container extends Component {
    private children: Component[] = [];

    public add(child: Component): void {
        this.children.push(child);
        child.setContainer(this);
    }

    public getChildren(): Component[] {
        return this.children;
    }

    public getLastChildren(): Component {
        return this.children[this.children.length - 1];
    }

}

export { Container };