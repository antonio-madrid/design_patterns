/** DB connections are the Products */
interface DatabaseConnection {
    connect(): void;
    disconnect(): void;
    // Other methods for interacting with the DB
}

export { DatabaseConnection };