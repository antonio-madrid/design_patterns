import {Subject} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Concept/code/subjects/Subject";

interface Observer {
    update(subject: Subject): void;
}

export { Observer };