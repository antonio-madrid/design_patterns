import {DatabaseConnectionFactory} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/databases/code/creators/DatabaseConnectionFactory";
import {DatabaseConnection} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/databases/code/products/DatabaseConnection";
import {ConcreteDatabaseConnection2} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/databases/code/products/ConcreteDatabaseConnection2";

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