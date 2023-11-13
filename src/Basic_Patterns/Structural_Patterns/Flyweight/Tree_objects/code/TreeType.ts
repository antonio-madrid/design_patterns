/** Flyweight class */
class TreeType {
    constructor(
        private name: string,
        private color: string,
        private texture: string
    ) {}

    public draw(canvas: HTMLCanvasElement, x: number, y: number) {
        console.log(`Drawing ${this.name} tree with color ${this.color} and texture ${this.texture} at position (${x}, ${y}`);
    }
}

export { TreeType };