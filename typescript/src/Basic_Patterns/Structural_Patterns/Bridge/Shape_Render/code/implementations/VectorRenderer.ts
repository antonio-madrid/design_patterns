import {Renderer} from "src/Basic_Patterns/Structural_Patterns/Bridge/Shape_Render/code/implementations/Renderer";

class VectorRenderer implements Renderer {
    renderShape(shape: string) {
        console.log(`Rendering ${shape} in Vector format`);
    }
}

export { VectorRenderer };