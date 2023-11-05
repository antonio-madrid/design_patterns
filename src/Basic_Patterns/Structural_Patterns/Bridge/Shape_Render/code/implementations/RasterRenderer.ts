import {Renderer} from "src/Basic_Patterns/Structural_Patterns/Bridge/Shape_Render/code/implementations/Renderer";

class RasterRenderer implements Renderer {
    renderShape(shape: string) {
        console.log(`Rendering ${shape} in Raster format`);
    }
}

export { RasterRenderer };