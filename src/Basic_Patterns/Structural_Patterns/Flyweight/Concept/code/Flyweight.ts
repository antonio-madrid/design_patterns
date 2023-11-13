class Flyweight {
    /** immutable field */
    constructor(public readonly sharedState: string) {
    }

    /** Context operation */
    public operation(uniqueState: string): void {
        console.log(`Flyweight: Displaying shared (${this.sharedState}) and unique (${uniqueState}) state.`);
    }
}

export { Flyweight };