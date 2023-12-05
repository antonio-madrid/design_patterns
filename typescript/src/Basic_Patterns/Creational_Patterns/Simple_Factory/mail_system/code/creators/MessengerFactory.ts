import {Messenger} from "src/Basic_Patterns/Creational_Patterns/Simple_Factory/mail_system/code/products/Messenger";
import {SMSMessenger} from "src/Basic_Patterns/Creational_Patterns/Simple_Factory/mail_system/code/products/SMSMessenger";
import {EmailMessenger} from "src/Basic_Patterns/Creational_Patterns/Simple_Factory/mail_system/code/products/EmailMessenger";
import {WhatsappMessenger} from "src/Basic_Patterns/Creational_Patterns/Simple_Factory/mail_system/code/products/WhatsappMessenger";

/** A Simple Factory class */
class MessengerFactory {
    public createMessenger(type: string): Messenger {
        if (type === 'sms') {
            return new SMSMessenger();
        } else if (type === 'email') {
            return new EmailMessenger();
        } else if (type === 'whatsapp') {
            return new WhatsappMessenger();
        } else {
            throw new Error('Unknown specified messenger.')
        }
    }
}

export { MessengerFactory };