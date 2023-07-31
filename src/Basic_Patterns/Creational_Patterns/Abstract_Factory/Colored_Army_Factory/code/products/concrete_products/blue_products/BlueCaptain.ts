import {Captain} from "../../interfaces/Captain";

/** Concrete Product of the blue family */
class BlueCaptain implements Captain {
    public command():void  {
        console.log('Blue captain is commanding his troops...');
    }
}

export { BlueCaptain };