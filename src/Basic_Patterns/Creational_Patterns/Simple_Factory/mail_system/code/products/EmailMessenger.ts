import {Messenger} from "../products/Messenger"

/** A Concrete Product */
class EmailMessenger implements Messenger {
    public sendMessage(message: string) {
        console.log(`Sending an email with the following message: ${message}`);
    }
}

export { EmailMessenger };