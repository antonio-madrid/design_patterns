import {Tower} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Air_Traffic_Control/code/mediators/Tower";
import {Airplane} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Air_Traffic_Control/code/components/Airplane";

/** Concrete Mediator */
class ControlTower implements Tower {
    private planes: Airplane[] = [];

    registerPlane(airplane: Airplane): void {
        this.planes.push(airplane);
    }

    notify(plane: Airplane, event: string) {
        this.planes.forEach((p) => {
            if (p !== plane) {
                p.receiveMessage(plane, event);
            }
        });
    }

}

export { ControlTower };