import {Widget} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Widgets/code/components/Widget";

interface Mediator {
    notify(sender: Widget, event: string): void;
}

export { Mediator };