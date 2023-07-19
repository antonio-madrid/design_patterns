import {DatabaseConnection} from "./DatabaseConnection";

/** A concrete DB connection such as MongoDB */
class ConcreteDatabaseConnection2 implements DatabaseConnection {
    public connect(): void {
        console.log('Connecting to an alternative database...');
    }

    public disconnect(): void {
        console.log('Disconnecting from an alternative database...');
    }
}

export { ConcreteDatabaseConnection2 };