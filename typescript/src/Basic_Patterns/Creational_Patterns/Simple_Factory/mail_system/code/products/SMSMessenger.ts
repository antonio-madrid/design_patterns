import {Messenger} from "src/Basic_Patterns/Creational_Patterns/Simple_Factory/mail_system/code/products/Messenger";

/** A Concrete Product */
class SMSMessenger implements Messenger {
    public sendMessage(message: string) {
        console.log(`Sending a SMS with the following message: ${message}`);
    }
}

export { SMSMessenger };