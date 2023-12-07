import {Widget} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Widgets/code/components/Widget";

/** Component */
class Button extends Widget {
    click(): void {
        console.log('Button was clicked');
        this.mediator.notify(this, 'click');
    }
}

export { Button };