import {Messenger} from "../products/Messenger";

/** A Concrete Product */
class WhatsappMessenger implements Messenger {
    public sendMessage(message: string) {
        console.log(`Sending a Whatsapp with the following message: ${message}`);
    }
}

export { WhatsappMessenger };