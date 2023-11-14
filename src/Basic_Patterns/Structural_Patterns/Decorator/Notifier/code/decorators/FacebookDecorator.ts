import {BaseDecorator} from "src/Basic_Patterns/Structural_Patterns/Decorator/Notifier/code/decorators/BaseDecorator";

class FacebookDecorator extends BaseDecorator {
    public send(message: string) {
        console.log(`Posting message to Facebook: ${message}`);
        super.send(message);
    }
}

export { FacebookDecorator }