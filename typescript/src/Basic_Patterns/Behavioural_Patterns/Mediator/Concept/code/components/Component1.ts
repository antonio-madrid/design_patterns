import {BaseComponent} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Concept/code/components/BaseComponent";

class Component1 extends BaseComponent {
    public doA(): void {
        console.log('Component 1 does A.');
        this.mediator.notify(this, 'A');
    }

    public doB(): void {
        console.log('Component 1 does B.');
        this.mediator.notify(this, 'B');
    }
}

export { Component1 };