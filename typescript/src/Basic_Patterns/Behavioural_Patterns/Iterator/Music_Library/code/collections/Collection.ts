import {Iterator} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Music_Library/code/iterators/Iterator";

interface Collection<T> {
    createIterator(): Iterator<T>;
}

export { Collection };