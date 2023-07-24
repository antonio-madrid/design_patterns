import {Chair} from "../../interfaces/Chair";

class VictorianChair implements Chair {
    public sitOn(): void {
        console.log("You're sitting on a modern chair.");
    }
}

export { VictorianChair };