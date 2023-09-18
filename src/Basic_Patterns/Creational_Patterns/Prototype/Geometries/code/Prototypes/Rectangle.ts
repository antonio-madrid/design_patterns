import {Shape} from "./Shape";

/** Prototype class */
class Rectangle extends Shape {
    constructor(width: number, height: number, color: string, id: string) {
        super(width, height, color);
    }

    public clone(): Rectangle {
        /** passing() creates a shallow copy*/
        return Object.assign(Object.create(this));
    }
}

export {Rectangle};