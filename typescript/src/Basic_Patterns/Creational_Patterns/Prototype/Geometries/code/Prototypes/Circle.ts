import {Shape} from "src/Basic_Patterns/Creational_Patterns/Prototype/Geometries/code/Prototypes/Shape";

/** Prototype class */
class Circle extends Shape {
    public radius!: number;

    constructor(width: number, height: number, color: string, radius: number, id: string) {
        super(width, height, color);
        this.radius = radius;
    }

    public clone(): Circle {
        /** assign() creates a shallow copy*/
        return Object.assign(Object.create(this));
    }
}

export {Circle};