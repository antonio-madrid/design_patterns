import {DatabaseConnectionFactory} from "../creators/DatabaseConnectionFactory";
import {DatabaseConnection} from "../products/DatabaseConnection";
import {AlternativeDatabaseConnectionFactory} from "../creators/AlternativeDatabaseConnectionFactory";

const factory: DatabaseConnectionFactory = new DatabaseConnectionFactory();
const connection1: DatabaseConnection = factory.createConnection(); // it creates a default DB connection
connection1.connect();

const connection2: DatabaseConnection = factory.createConnection(); // It will reuse the existing DB connection
connection2.connect(); // This would reconnect to the same DB

connection1.disconnect(); // This would close both connections


const alternativeFactory: DatabaseConnectionFactory = new AlternativeDatabaseConnectionFactory();
const alternativeConnection1: DatabaseConnection = alternativeFactory.createConnection();
alternativeConnection1.connect();

const alternativeConnection2: DatabaseConnection = alternativeFactory.createConnection();
alternativeConnection2.connect(); // This would reconnect to the same DB

alternativeConnection1.disconnect();
