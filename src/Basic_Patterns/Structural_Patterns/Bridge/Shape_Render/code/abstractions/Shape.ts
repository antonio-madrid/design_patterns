import {Renderer} from "src/Basic_Patterns/Structural_Patterns/Bridge/Shape_Render/code/implementations/Renderer";

abstract class Shape {
    constructor(protected renderer: Renderer) {}

    abstract draw(): void;
}

export { Shape };