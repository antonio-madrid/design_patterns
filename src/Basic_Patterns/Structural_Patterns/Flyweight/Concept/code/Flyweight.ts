class Flyweight {
    /** immutable field */
    constructor(private readonly sharedState: string) {
    }

    public getSharedState(): string {
        return this.sharedState;
    }

    /** Context operation */
    public operation(uniqueState: string): void {
        console.log(`Flyweight: Displaying shared (${this.sharedState}) and unique (${uniqueState}) state.`);
    }
}

export { Flyweight };