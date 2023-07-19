import {Messenger} from "../products/Messenger";
import {SMSMessenger} from "../products/SMSMessenger";
import {EmailMessenger} from "../products/EmailMessenger";
import {WhatsappMessenger} from "../products/WhatsappMessenger";

/** A Single Factory class */
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