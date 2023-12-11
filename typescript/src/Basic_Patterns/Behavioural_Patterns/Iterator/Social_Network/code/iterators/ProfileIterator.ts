import {Iterator} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Social_Network/code/iterators/Iterator";
import {Profile} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Social_Network/code/Profile";
import {
    UserProfileCollection
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Social_Network/code/collections/UserProfileCollection";

/** Concrete Iterator */
class ProfileIterator implements Iterator<Profile> {
    private position: number = 0;

    constructor(private collection: UserProfileCollection) {}

    public next(): Profile | null {
        if (!this.hasNext()) {
            return null;
        }
        return this.collection.getProfiles()[this.position++];
    }

    public hasNext(): boolean {
        return this.position < this.collection.getProfiles().length;
    }
}

export { ProfileIterator };