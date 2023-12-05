/** Flyweight class */
class TreeType {
    /** Immutable data */
    constructor(
        private name: string,
        private color: string,
        private texture: string
    ) {}

    /** Parameters represents mutable data. */
    public draw(canvas: HTMLCanvasElement, x: number, y: number) {
        console.log(`Drawing ${this.name} tree with color ${this.color} and texture ${this.texture} at position (${x}, ${y}`);
    }
}

export { TreeType };