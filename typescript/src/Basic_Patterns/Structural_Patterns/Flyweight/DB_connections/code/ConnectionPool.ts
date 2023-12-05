import {
    DatabaseConnection
} from "src/Basic_Patterns/Structural_Patterns/Flyweight/DB_connections/code/DatabaseConnection";

/** Flyweight Factory */
class ConnectionPool {
    private connections: { [key: string]: DatabaseConnection } = {};

    public getConnection(connectionString: string): DatabaseConnection {
        if (!this.connections[connectionString]) {
            console.log(`Not found connection, creating a new one with values: ${connectionString}`)
            this.connections[connectionString] = new DatabaseConnection(connectionString);
        }
        return this.connections[connectionString];
    }
}

export { ConnectionPool };