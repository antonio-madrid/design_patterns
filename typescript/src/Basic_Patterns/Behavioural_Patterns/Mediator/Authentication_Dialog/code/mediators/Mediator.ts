import {
    Component
} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Authentication_Dialog/code/components/Component";

interface Mediator {
    notify(sender: Component, event: string): void;
}

export { Mediator };