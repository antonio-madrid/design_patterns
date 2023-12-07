import {Airplane} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Air_Traffic_Control/code/components/Airplane";

/** Mediator interface */
interface Tower {
    notify(plane: Airplane, event: string): void;
    registerPlane(plane: Airplane): void;
}

export { Tower };