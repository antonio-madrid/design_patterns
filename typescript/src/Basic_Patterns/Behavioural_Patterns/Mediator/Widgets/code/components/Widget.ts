import { Mediator } from "../mediators/Mediator";

/** Base Component */
abstract class Widget {
    protected mediator!: Mediator;

    setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}

export { Widget };