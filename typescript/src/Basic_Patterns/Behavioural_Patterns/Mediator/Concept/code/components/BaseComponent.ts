import {Mediator} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Concept/code/mediators/Mediator";

class BaseComponent {
    protected mediator: Mediator;

    constructor(mediator?: Mediator) {
        this.mediator = mediator!;
    }

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}

export { BaseComponent };