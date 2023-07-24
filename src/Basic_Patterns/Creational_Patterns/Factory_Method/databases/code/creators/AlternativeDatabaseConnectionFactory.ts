import {DatabaseConnectionFactory} from "./DatabaseConnectionFactory";
import {DatabaseConnection} from "../products/DatabaseConnection";
import {ConcreteDatabaseConnection2} from "../products/ConcreteDatabaseConnection2";

/** Concrete Factory = A concrete creator class*/
class AlternativeDatabaseConnectionFactory extends DatabaseConnectionFactory {
    public createConnection(): DatabaseConnection {
        if (this.connection === null) {
            this.connection = new ConcreteDatabaseConnection2();
        }

        return this.connection;
    }
}

export { AlternativeDatabaseConnectionFactory }