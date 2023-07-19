import {DatabaseConnection} from "./DatabaseConnection";

/** A Concrete DB connection such as MySQL */
class ConcreteDatabaseConnection1 implements DatabaseConnection {
    public connect(): void {
        console.log('Connecting to the database...');
    }

    public disconnect(): void {
        console.log('Disconnecting from database...');
    }
}

export { ConcreteDatabaseConnection1 };