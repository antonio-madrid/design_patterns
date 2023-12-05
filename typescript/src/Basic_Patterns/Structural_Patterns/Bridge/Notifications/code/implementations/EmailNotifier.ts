import {Notifier} from "src/Basic_Patterns/Structural_Patterns/Bridge/Notifications/code/implementations/Notifier";

class EmailNotifier implements Notifier {
    sendNotification(message: string) {
        console.log(`Sending email notification: ${message}`);
    }
}

export { EmailNotifier };