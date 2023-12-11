import {
    ProfileIterator
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Facebook_And_Linkendin_Graphs/code/iterators/ProfileIterator";

/** Collection Interface */
interface SocialNetwork {
    createFriendsIterator(profileEmail: string): ProfileIterator;
    createCoworkersIterator(profileEmail: string): ProfileIterator;
}

export {SocialNetwork};