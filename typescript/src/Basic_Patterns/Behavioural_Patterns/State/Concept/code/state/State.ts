import {Context} from "src/Basic_Patterns/Behavioural_Patterns/State/Concept/code/Context";

interface State {
    setContext(context: Context): void;
    handle1(): void;
    handle2(): void;
}

export { State };