/** Flyweight class */
class Particle {
    /** Immutable data */
    constructor(
        private color: string,
        private sprite: string
    ) {}

    public getColor(): string {
        return this.color;
    }

    public getSprite(): string {
        return this.sprite;
    }

    public move(coords: number[], vector: number[], speed: number): void {
        console.log('Logic to move the particle');
    }

    public draw(coords: number[], canvas: HTMLCanvasElement): void {
        console.log('Logic to draw the particle on the canvas.');
    }
}

export { Particle };