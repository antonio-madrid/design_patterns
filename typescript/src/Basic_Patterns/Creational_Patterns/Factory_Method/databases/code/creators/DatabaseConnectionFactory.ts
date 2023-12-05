import {DatabaseConnection} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/databases/code/products/DatabaseConnection";
import {ConcreteDatabaseConnection1} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/databases/code/products/ConcreteDatabaseConnection1";

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