import {MessengerFactory} from "src/Basic_Patterns/Creational_Patterns/Simple_Factory/mail_system/code/creators/MessengerFactory";
import {Messenger} from "src/Basic_Patterns/Creational_Patterns/Simple_Factory/mail_system/code/products/Messenger";

const factory: MessengerFactory = new MessengerFactory();

let messenger: Messenger = factory.createMessenger('sms');
messenger.sendMessage('Hell there!');

messenger = factory.createMessenger('email');
messenger.sendMessage('Dear person who is reading this');

messenger = factory.createMessenger('whatsapp');
messenger.sendMessage('hey!');

try {
    messenger = factory.createMessenger('foo'); // It should explode
} catch (error) {
    console.log('This Product, I mean, messenger, does not exists in this app.');
}
