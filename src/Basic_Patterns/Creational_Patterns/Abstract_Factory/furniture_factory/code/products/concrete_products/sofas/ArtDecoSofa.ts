import {Sofa} from "../../interfaces/Sofa";

class ArtDecoSofa implements Sofa {
    public layOn(): void {
        console.log("You're laying on an artistic decoration sofa.");
    }
}

export { ArtDecoSofa };