import {Shape} from "src/Basic_Patterns/Creational_Patterns/Prototype/Geometries/code/Prototypes/Shape";

/** Prototype class */
class Rectangle extends Shape {
    constructor(width: number, height: number, color: string, id: string) {
        super(width, height, color);
    }

    public clone(): Rectangle {
        /** assign() creates a shallow copy*/
        return Object.assign(Object.create(this));
    }
}

export {Rectangle};