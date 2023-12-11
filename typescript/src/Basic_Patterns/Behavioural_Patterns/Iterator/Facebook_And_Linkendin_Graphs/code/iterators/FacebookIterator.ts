import {
    ProfileIterator
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Facebook_And_Linkendin_Graphs/code/iterators/ProfileIterator";
import {Profile} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Facebook_And_Linkendin_Graphs/code/Profile";
import {
    Facebook
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Facebook_And_Linkendin_Graphs/code/collections/Facebook";

/** Concrete Iterator */
class FacebookIterator implements ProfileIterator {

    private currentPosition = 0;
    private emails: string[] = [];
    private profiles: (Profile | null)[] = [];

    constructor(
        private facebook: Facebook,
        private type: string,
        private email: string
    ) {}

    private lazyLoad(): void {
        if (this.emails.length === 0) {
            const profiles = this.facebook.requestProfileFriendsFromFacebook(this.email, this.type);
            for (const profile of profiles) {
                this.emails.push(profile);
                this.profiles.push(null);
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

        const friendEmail = this.emails[this.currentPosition];
        let friendProfile = this.profiles[this.currentPosition];
        if (friendProfile === null) {
            friendProfile = this.facebook.requestProfileFromFacebook(friendEmail);
            this.profiles[this.currentPosition] = friendProfile;
        }
        this.currentPosition++;
        return friendProfile;
    }

    reset() {
        this.currentPosition = 0;
    }
}

export { FacebookIterator };