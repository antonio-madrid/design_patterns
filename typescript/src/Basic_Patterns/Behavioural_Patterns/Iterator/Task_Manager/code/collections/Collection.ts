import {Iterator} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Task_Manager/code/iterators/Iterator";

interface Collection<T> {
    createIterator(): Iterator<T>;
}

export { Collection };