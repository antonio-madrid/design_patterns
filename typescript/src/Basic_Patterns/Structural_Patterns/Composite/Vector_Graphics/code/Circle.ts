import {Graphic} from "src/Basic_Patterns/Structural_Patterns/Composite/Vector_Graphics/code/Graphic";

class Circle implements Graphic {
    render() {
        console.log("Rendered a circle");
    }
}

export { Circle };