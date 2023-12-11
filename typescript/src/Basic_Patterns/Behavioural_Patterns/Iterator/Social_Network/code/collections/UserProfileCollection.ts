import {Collection} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Social_Network/code/collections/Collection";
import {Profile} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Social_Network/code/Profile";
import {
    ProfileIterator
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Social_Network/code/iterators/ProfileIterator";
import {Iterator} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Social_Network/code/iterators/Iterator";

/** Concrete Collection */
class UserProfileCollection implements Collection<Profile> {
    private profiles: Profile[] = [];

    public addProfile(profile: Profile): void {
        this.profiles.push(profile);
    }

    public getProfiles(): Profile[] {
        return this.profiles;
    }

    public createIterator(): Iterator<Profile> {
        return new ProfileIterator(this);
    }
}

export { UserProfileCollection };