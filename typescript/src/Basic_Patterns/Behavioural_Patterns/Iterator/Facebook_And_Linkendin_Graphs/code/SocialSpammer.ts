import {
    SocialNetwork
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Facebook_And_Linkendin_Graphs/code/collections/SocialNetwork";
import {
    ProfileIterator
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Facebook_And_Linkendin_Graphs/code/iterators/ProfileIterator";

/** Client class */
class SocialSpammer {
    constructor(private network: SocialNetwork) {}

    sendSpamToFriends(profileEmail: string, message: string): void {
        console.log('\nIteracting over friends...\n');
        const iterator = this.network.createFriendsIterator(profileEmail);
        this.sendSpam(iterator, message);
    }

    sendSpamToCoworkers(profileEmail: string, message: string): void {
        console.log('\nIterating over coworkers...\n');
        const iterator = this.network.createCoworkersIterator(profileEmail);
        this.sendSpam(iterator, message);
    }

    private sendSpam(iterator: ProfileIterator, message: string): void {
        while (iterator.hasNext()) {
            const profile = iterator.getNext();
            if (profile) {
                this.sendMessage(profile.getEmail(), message);
            }
        }
    }

    private sendMessage(email: string, message: string): void {
        console.log(`Send message to: '${email}'. Message body: '${message}'`);
    }
}

export { SocialSpammer };