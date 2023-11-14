import {Notifier} from "src/Basic_Patterns/Structural_Patterns/Decorator/Notifier/code/components/Notifier";

class EmailNotifier implements Notifier {
    public send(message: string) {
        console.log(`Sending email with message: ${message}`);
    }
}

export { EmailNotifier };