import {Observer} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Concept/code/observers/Observer";

interface Publisher {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}

export { Publisher };