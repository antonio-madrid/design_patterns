import {
    EmailNotifier
} from "src/Basic_Patterns/Structural_Patterns/Bridge/Notifications/code/implementations/EmailNotifier";
import {Notification} from "src/Basic_Patterns/Structural_Patterns/Bridge/Notifications/code/abstractions/Notification";
import {
    SMSNotifier
} from "src/Basic_Patterns/Structural_Patterns/Bridge/Notifications/code/implementations/SMSNotifier";

const emailNotifier = new EmailNotifier();
const emailNotification = new Notification(emailNotifier);
emailNotification.notify('New email notification!');

const smsNotifier = new SMSNotifier();
const smsNotification = new Notification(smsNotifier);
smsNotification.notify('New SMS notification!');


