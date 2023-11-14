/** Flyweight class */
class Particle {
    /** Immutable data */
    constructor(
        public color: string,
        public sprite: string
    ) {}

    public move(coords: number[], vector: number[], speed: number): void {
        console.log('Logic to move the particle');
    }

    public draw(coords: number[], canvas: HTMLCanvasElement): void {
        console.log('Logic to draw the particle on the canvas.');
    }
}

export { Particle };