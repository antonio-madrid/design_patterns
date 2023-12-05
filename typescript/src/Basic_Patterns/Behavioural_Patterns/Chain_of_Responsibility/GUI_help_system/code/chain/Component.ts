import {
    ComponentWithContextualHelp
} from "src/Basic_Patterns/Behavioural_Patterns/Chain_of_Responsibility/GUI_help_system/code/chain/ComponentWithContextualHelp";
import {
    Container
} from "src/Basic_Patterns/Behavioural_Patterns/Chain_of_Responsibility/GUI_help_system/code/chain/Container";

/** Base Handler - Optional */
abstract class Component implements ComponentWithContextualHelp {
    private container?: Container;
    public tooltipText?: string;


    public setContainer(container: Container): void {
        this.container = container;
    }

    public showHelp(): void {
        if (this.tooltipText) {
            console.log(this.tooltipText);
        } else {
            this.container?.showHelp();
        }
    }
}

export { Component };