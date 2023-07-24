import {Chair} from "../../interfaces/Chair";

class ArtDecoChair implements Chair {
    public sitOn(): void {
        console.log("You're sitting on an artistic decoration chair.");
    }
}

export { ArtDecoChair };