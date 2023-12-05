import {Visitor} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Concept/code/visitors/Visitor";

interface Element {
    accept(visitor: Visitor): void;
}

export { Element };