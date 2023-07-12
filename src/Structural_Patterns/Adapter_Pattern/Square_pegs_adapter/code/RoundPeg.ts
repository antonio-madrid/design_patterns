// RoundPeg is compatible with RoundHole interface fits()
export class RoundPeg {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }
}