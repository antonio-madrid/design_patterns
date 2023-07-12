// SquarePeg is not compatible with RoundHole interface fits()
export class SquarePeg {
    width: number;

    constructor(width: number) {
        this.width = width;
    }

    getWidth(): number {
        return this.width;
    }
}