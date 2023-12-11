import {
    SocialNetwork
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Facebook_And_Linkendin_Graphs/code/collections/SocialNetwork";
import {Profile} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Facebook_And_Linkendin_Graphs/code/Profile";
import {
    ProfileIterator
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Facebook_And_Linkendin_Graphs/code/iterators/ProfileIterator";
import {
    FacebookIterator
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Facebook_And_Linkendin_Graphs/code/iterators/FacebookIterator";

/** Concrete Collection */
class Facebook implements SocialNetwork {
    private profiles: Profile[];

    constructor(cache?: Profile[]) {
        this.profiles = cache || [];
    }

    requestProfileFromFacebook(profileEmail: string): Profile {
        this.simulateNetworkLatency();
        console.log(`Facebook: Loading profile '${profileEmail} over the network...`);

        return this.findProfile(profileEmail);
    }

    requestProfileFriendsFromFacebook(profileEmail: string, contactType: string): string[] {
        this.simulateNetworkLatency();
        console.log(`Facebook: Loading '${contactType}' list of '${profileEmail}' over the network...`);

        const profile = this.findProfile(profileEmail);
        if (profile) {
            return profile.getContacts(contactType);
        }
        return [];
    }

    private findProfile(profileEmail: string): Profile {
        const profile = this.profiles.find(profile => profile.getEmail() === profileEmail);
        if (!profile) {
            throw new Error(`Facebook: Profile with email '${profileEmail}' not found.`);
        }
        return profile;
    }

    private simulateNetworkLatency(): void {
        console.log('Simulating network latency...');
    }

    createFriendsIterator(profileEmail: string): ProfileIterator {
        return new FacebookIterator(this, 'friends', profileEmail);
    }

    createCoworkersIterator(profileEmail: string): ProfileIterator {
        return new FacebookIterator(this, 'coworkers', profileEmail);
    }
}

export { Facebook };