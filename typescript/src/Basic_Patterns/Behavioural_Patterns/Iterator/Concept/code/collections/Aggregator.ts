import {Iterator} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Concept/code/iterators/Iterator";

/** Collection Interface */
interface Aggregator {
    getIterator(): Iterator<string>;
}

export { Aggregator };