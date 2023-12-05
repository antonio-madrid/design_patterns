import {BaseDecorator} from "src/Basic_Patterns/Structural_Patterns/Decorator/Notifier/code/decorators/BaseDecorator";

class SlackDecorator extends BaseDecorator {
    public send(message: string) {
        console.log(`Sending Slack notification with message: ${message}`);
        super.send(message);
    }
}

export { SlackDecorator };