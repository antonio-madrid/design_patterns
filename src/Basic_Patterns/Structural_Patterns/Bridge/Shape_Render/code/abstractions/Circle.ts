import {Shape} from "src/Basic_Patterns/Structural_Patterns/Bridge/Shape_Render/code/abstractions/Shape";

class Circle extends Shape {
    draw() {
        this.renderer.renderShape('Circle');
    }
}

export { Circle };