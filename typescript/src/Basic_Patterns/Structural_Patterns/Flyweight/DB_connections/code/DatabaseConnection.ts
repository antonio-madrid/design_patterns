/** Flyweight */
class DatabaseConnection {
    constructor(
        private connectionString: String
    ) {}

    public connect(): void {
        console.log(`Connecting to ${this.connectionString}`);
    }
}

export { DatabaseConnection };