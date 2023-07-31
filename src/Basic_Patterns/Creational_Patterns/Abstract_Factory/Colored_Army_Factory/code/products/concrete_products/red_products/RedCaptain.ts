import {Captain} from "../../interfaces/Captain";

/** Concrete Product of the red family */
class RedCaptain implements Captain {
    public command(): void {
        console.log('Red captain is commanding his troops...')
    }
}

export { RedCaptain };