import {DatabaseConnection} from "../products/DatabaseConnection";
import {ConcreteDatabaseConnection1} from "../products/ConcreteDatabaseConnection1";

/** Base Factory = base Creator class */
class DatabaseConnectionFactory {
    protected connection: DatabaseConnection | null = null;

    public createConnection(): DatabaseConnection {
        if (this.connection === null) {
            this.connection = new ConcreteDatabaseConnection1();
        }

        return this.connection;
    }
}

export { DatabaseConnectionFactory };