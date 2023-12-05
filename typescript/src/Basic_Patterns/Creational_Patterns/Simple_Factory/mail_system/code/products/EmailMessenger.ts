import {Messenger} from "src/Basic_Patterns/Creational_Patterns/Simple_Factory/mail_system/code/products/Messenger"

/** A Concrete Product */
class EmailMessenger implements Messenger {
    public sendMessage(message: string) {
        console.log(`Sending an email with the following message: ${message}`);
    }
}

export { EmailMessenger };