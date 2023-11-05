import {
    VectorRenderer
} from "src/Basic_Patterns/Structural_Patterns/Bridge/Shape_Render/code/implementations/VectorRenderer";
import {
    RasterRenderer
} from "src/Basic_Patterns/Structural_Patterns/Bridge/Shape_Render/code/implementations/RasterRenderer";
import {Circle} from "src/Basic_Patterns/Structural_Patterns/Bridge/Shape_Render/code/abstractions/Circle";
import {Square} from "src/Basic_Patterns/Structural_Patterns/Bridge/Shape_Render/code/abstractions/Square";

const vector = new VectorRenderer();
const raster = new RasterRenderer();

const circle = new Circle(vector);
circle.draw();

const square = new Square(raster);
square.draw();
