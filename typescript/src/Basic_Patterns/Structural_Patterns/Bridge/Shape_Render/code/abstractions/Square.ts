import {Shape} from "src/Basic_Patterns/Structural_Patterns/Bridge/Shape_Render/code/abstractions/Shape";

class Square extends Shape {
    draw() {
        this.renderer.renderShape('Square');
    }
}

export { Square };