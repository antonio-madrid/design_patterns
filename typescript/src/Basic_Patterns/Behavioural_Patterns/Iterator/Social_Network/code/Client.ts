import {
    UserProfileCollection
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Social_Network/code/collections/UserProfileCollection";
import {Profile} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Social_Network/code/Profile";

const userProfiles = new UserProfileCollection();
userProfiles.addProfile(new Profile('John Doe', 'user1@example.com'));
userProfiles.addProfile(new Profile('Jane Doe', 'user2@example.com'));

const iterator = userProfiles.createIterator();

while (iterator.hasNext()) {
    const profile = iterator.next();
    console.log(`Profile: ${profile?.username}, Email: ${profile?.email}`)
}