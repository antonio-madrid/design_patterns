abstract class House {
    protected parts: string[] = [];

    public addPart(part: string): void {
        this.parts.push(part);
    }

    public abstract show(): void;
}

export { House };