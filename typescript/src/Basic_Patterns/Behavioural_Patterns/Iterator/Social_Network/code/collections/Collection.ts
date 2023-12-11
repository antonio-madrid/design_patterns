import {Iterator} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Social_Network/code/iterators/Iterator";

interface Collection<T> {
    createIterator(): Iterator<T>;
}

export { Collection };