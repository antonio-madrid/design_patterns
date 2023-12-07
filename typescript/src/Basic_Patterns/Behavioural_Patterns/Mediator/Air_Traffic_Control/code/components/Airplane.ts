import {Tower} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Air_Traffic_Control/code/mediators/Tower";

/** Component */
class Airplane {
    constructor(
        private id: number,
        private tower: Tower
    ) {
        this.tower.registerPlane(this);
    }

    sendMessage(event: string) {
        this.tower.notify(this, event);
    }

    receiveMessage(plane: Airplane, event: string) {
        console.log(`Plane ${this.id} received message from Plane ${plane.id}: ${event}`);
    }
}

export { Airplane };