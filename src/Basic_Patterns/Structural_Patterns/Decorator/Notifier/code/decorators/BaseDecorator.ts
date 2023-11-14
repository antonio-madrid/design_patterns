import {Notifier} from "src/Basic_Patterns/Structural_Patterns/Decorator/Notifier/code/components/Notifier";

class BaseDecorator implements Notifier {
    constructor(protected wrappee: Notifier) {}

    public send(message: string) {
        this.wrappee.send(message);
    }
}

export { BaseDecorator };