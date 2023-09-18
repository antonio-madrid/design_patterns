import {Shape} from "./Shape";

/** Prototype class */
class Circle extends Shape {
    public radius!: number;

    constructor(width: number, height: number, color: string, radius: number, id: string) {
        super(width, height, color);
        this.radius = radius;
    }

    public clone(): Circle {
        /** passing() creates a shallow copy*/
        return Object.assign(Object.create(this));
    }
}

export {Circle};