import {EventListener} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Text_editor/code/observers/EventListener";

/** Concrete Observer */
class EmailAlertsListener implements EventListener {
    private email: string;
    private message: string;

    constructor(email: string, message: string) {
        this.email = email;
        this.message = message;
    }

    public update(filename: string): void {
        console.log(`Emailing to ${this.email}: ${this.message.replace('%s', filename)}`);
    }
}

export { EmailAlertsListener };