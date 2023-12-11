import {
    SocialNetwork
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Facebook_And_Linkendin_Graphs/code/collections/SocialNetwork";
import {Profile} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Facebook_And_Linkendin_Graphs/code/Profile";
import {
    ProfileIterator
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Facebook_And_Linkendin_Graphs/code/iterators/ProfileIterator";
import {
    LinkedInIterator
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Facebook_And_Linkendin_Graphs/code/iterators/LinkedInIterator";

class LinkedIn implements SocialNetwork {
    private contacts: Profile[];

    constructor(cache: Profile[] | null) {
        this.contacts = cache || [];
    }

    requestContactInfoFromLinkedInAPI(profileEmail: string): Profile {
        this.simulateNetworkLatency();
        console.log(`LinkedIn: Loading profile '${profileEmail}' over the network...`);

        return this.findContact(profileEmail);
    }

    requestRelatedContactsFromLinkedInAPI(profileEmail: string, contactType: string): string[] {
        this.simulateNetworkLatency();
        console.log(`LinkedIn: Loading list of '${contactType}' of '${profileEmail}' over the network...`);

        let profile = this.findContact(profileEmail);
        if (profile) {
            return profile.getContacts(contactType);
        }
        return [];
    }

    private findContact(profileEmail: string): Profile {
        for (let profile of this.contacts) {
            if (profile.getEmail() === profileEmail) {
                return profile;
            }
        }

        throw new Error(`LinkedIn: profile with email '${profileEmail}' not found.`);
    }

    private simulateNetworkLatency(): void {
        console.log('Simulating network latency...');
    }

    createFriendsIterator(profileEmail: string): ProfileIterator {
        return new LinkedInIterator(this, 'friends', profileEmail);
    }

    createCoworkersIterator(profileEmail: string): ProfileIterator {
        return new LinkedInIterator(this, 'coworkers', profileEmail);
    }
}

export { LinkedIn }