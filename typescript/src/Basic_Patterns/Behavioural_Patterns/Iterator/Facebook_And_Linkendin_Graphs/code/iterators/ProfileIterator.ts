import {Profile} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Facebook_And_Linkendin_Graphs/code/Profile";

/** Iterator Interface */
interface ProfileIterator {
    hasNext(): boolean;
    getNext(): Profile | null;
    reset(): void;
}

export { ProfileIterator };