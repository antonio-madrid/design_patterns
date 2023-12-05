import {Notifier} from "src/Basic_Patterns/Structural_Patterns/Bridge/Notifications/code/implementations/Notifier";

class SMSNotifier implements Notifier {
    sendNotification(message: string) {
        console.log(`Sending SMS notification: ${message}`);
    }
}

export { SMSNotifier };