import {Publisher} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Concept/code/publishers/Publisher";

interface Observer {
    update(publisher: Publisher): void;
}

export { Observer };