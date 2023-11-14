import {BaseDecorator} from "src/Basic_Patterns/Structural_Patterns/Decorator/Notifier/code/decorators/BaseDecorator";

class SMSDecorator extends BaseDecorator {
    public send(message: string) {
        console.log(`Sending SMS with message: ${message}`);
        super.send(message);
    }
}

export { SMSDecorator };