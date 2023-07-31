import {Captain} from "../../interfaces/Captain";

/** Concrete Product of the green family */
class GreenCaptain implements Captain {
    public command(): void {
        console.log('Green captain is commanding his troops...');
    }
}

export { GreenCaptain };