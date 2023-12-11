import {
    ProfileIterator
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Facebook_And_Linkendin_Graphs/code/iterators/ProfileIterator";
import {Profile} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Facebook_And_Linkendin_Graphs/code/Profile";
import {
    LinkedIn
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Facebook_And_Linkendin_Graphs/code/collections/LinkedIn";

/** Concrete Iterator */
class LinkedInIterator implements ProfileIterator {
    private currentPosition = 0;
    private emails: string[] = [];
    private contacts: (Profile | null)[] = [];

    constructor(
        private linkedIn: LinkedIn,
        private type: string,
        private email: string)
    {}

    private lazyLoad(): void {
        if (this.emails.length === 0) {
            const profiles = this.linkedIn.requestRelatedContactsFromLinkedInAPI(this.email, this.type);
            for (const profile of profiles) {
                this.emails.push(profile);
                this.contacts.push(null);
            }
        }
    }

    hasNext(): boolean {
        this.lazyLoad();
        return this.currentPosition < this.emails.length;
    }

    getNext(): Profile | null {
        if (!this.hasNext()) {
            return null;
        }

        let contactEmail = this.emails[this.currentPosition];
        let contactProfile = this.contacts[this.currentPosition];
        if (contactProfile === null) {
            contactProfile = this.linkedIn.requestContactInfoFromLinkedInAPI(contactEmail);
            this.contacts[this.currentPosition] = contactProfile;
        }

        this.currentPosition++;
        return contactProfile;
    }

    reset() {
        this.currentPosition = 0;
    }
}

export { LinkedInIterator };