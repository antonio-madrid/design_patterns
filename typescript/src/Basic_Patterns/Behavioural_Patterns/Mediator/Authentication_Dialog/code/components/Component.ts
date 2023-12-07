import {Mediator} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Authentication_Dialog/code/mediators/Mediator";

abstract class Component {
    constructor(protected dialog: Mediator) {}

    click(): void {
        console.log('Button was clicked');
        this.dialog.notify(this, 'click');
    }

    keypress(): void {
        console.log('Key was pressed');
        this.dialog.notify(this, 'keypress');
    }
}

export { Component };