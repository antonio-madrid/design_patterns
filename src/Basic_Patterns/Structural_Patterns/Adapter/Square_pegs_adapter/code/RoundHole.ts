import {RoundPeg} from "./RoundPeg";

// RoundHole interface, fits(), is compatible with RoundPeg
export class RoundHole {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }

    fits(peg: RoundPeg): boolean {
        return this.getRadius() >= peg.getRadius();
    }
}