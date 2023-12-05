import {Visitor} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Geometric_Shapes/code/visitors/Visitor";

/** Element Interface */
interface Shape {
    move(x: number, y: number): void;
    draw(): void;
    accept(visitor: Visitor): void;
}

export { Shape };