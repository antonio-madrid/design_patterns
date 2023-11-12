class Flyweight {
    private readonly shareState: any;

    constructor(sharedState: any) {
        this.shareState = sharedState;
    }

    public operation(uniqueState: any): void {
        const shared = JSON.stringify(this.shareState);
        const unique = JSON.stringify(uniqueState);
        console.log(`Flyweight: Displaying shared (${shared}) and unique (${unique}) state.`);
    }
}

export { Flyweight };