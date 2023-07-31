import {Captain} from "../../interfaces/Captain";

/** Concrete Product of the yellow family */
class YellowCaptain implements Captain {
    public command() {
        console.log('Yellow captain is commanding his troops...');
    }
}

export { YellowCaptain };