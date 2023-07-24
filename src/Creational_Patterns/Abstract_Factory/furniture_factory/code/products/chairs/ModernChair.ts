import {Chair} from "../../interfaces/Chair";

class ModernChair implements Chair {
    public sitOn(): void {
        console.log("You're sitting on a modern chair.");
    }
}

export { ModernChair };