import {Iterator} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Array_Iterator/code/iterators/Iterator";

interface Collection<T> {
    createIterator(): Iterator<T>;
}

export { Collection };