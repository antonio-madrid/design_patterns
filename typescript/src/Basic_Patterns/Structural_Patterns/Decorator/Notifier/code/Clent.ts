import {Notifier} from "src/Basic_Patterns/Structural_Patterns/Decorator/Notifier/code/components/Notifier";
import {EmailNotifier} from "src/Basic_Patterns/Structural_Patterns/Decorator/Notifier/code/components/EmailNotifier";
import {SMSDecorator} from "src/Basic_Patterns/Structural_Patterns/Decorator/Notifier/code/decorators/SMSDecorator";
import {
    FacebookDecorator
} from "src/Basic_Patterns/Structural_Patterns/Decorator/Notifier/code/decorators/FacebookDecorator";
import {SlackDecorator} from "src/Basic_Patterns/Structural_Patterns/Decorator/Notifier/code/decorators/SlackDecorator";
import {Application} from "src/Basic_Patterns/Structural_Patterns/Decorator/Notifier/code/Application";

let notifier: Notifier = new EmailNotifier();

const smsEnabled = true;
const facebookEnabled = true;
const slackEnabled = true;

if (smsEnabled) {
    notifier = new SMSDecorator(notifier);
}

if (facebookEnabled) {
    notifier = new FacebookDecorator(notifier);
}

if (slackEnabled) {
    notifier = new SlackDecorator(notifier);
}

const app = new Application();
app.setNotifier(notifier);
app.doSomething();