import {TreeType} from "src/Basic_Patterns/Structural_Patterns/Flyweight/Tree_objects/code/TreeType";

/** Contextual object class */
class Tree {
    /** Mutable data */
    constructor(
        public x: number,
        public y: number,
        public type: TreeType
    ) {}

    public draw(canvas: HTMLCanvasElement): void {
        this.type.draw(canvas, this.x, this.y);
    }
}

export { Tree };