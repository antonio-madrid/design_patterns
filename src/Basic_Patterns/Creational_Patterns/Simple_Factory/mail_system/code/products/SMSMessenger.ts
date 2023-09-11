import {Messenger} from "../products/Messenger";

/** A Concrete Product */
class SMSMessenger implements Messenger {
    public sendMessage(message: string) {
        console.log(`Sending a SMS with the following message: ${message}`);
    }
}

export { SMSMessenger };