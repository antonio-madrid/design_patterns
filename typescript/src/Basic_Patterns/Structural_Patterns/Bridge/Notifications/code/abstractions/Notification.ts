import {Notifier} from "src/Basic_Patterns/Structural_Patterns/Bridge/Notifications/code/implementations/Notifier";

class Notification {
    constructor(protected notifier: Notifier) {}

    notify(message: string) {
        this.notifier.sendNotification(message);
    }
}

export { Notification };