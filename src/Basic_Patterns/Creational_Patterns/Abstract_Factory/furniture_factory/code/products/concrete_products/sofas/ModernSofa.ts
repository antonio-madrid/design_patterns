import {Sofa} from "../../interfaces/Sofa";

class ModernSofa implements Sofa {
    public layOn(): void {
        console.log("You're laying on a modern sofa.");
    }
}

export { ModernSofa };