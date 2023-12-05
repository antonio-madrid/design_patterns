import {Visitor} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Geometric_Shapes/code/visitors/Visitor";
import {Shape} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Geometric_Shapes/code/elements/Shape";

/** Concrete Element */
class Dot implements Shape {
    move(x: number, y: number): void {
        // move shape
    }

    draw(): void {
        // draw shape
    }

    accept(visitor: Visitor): void {
        visitor.visitDot(this);
    }
}

export { Dot };