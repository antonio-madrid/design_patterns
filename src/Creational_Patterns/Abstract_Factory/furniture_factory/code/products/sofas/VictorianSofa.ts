import {Sofa} from "../../interfaces/Sofa";

class VictorianSofa implements Sofa {
    public layOn(): void {
        console.log("You're laying on a Victorian sofa.");
    }
}

export { VictorianSofa };