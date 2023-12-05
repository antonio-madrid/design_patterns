import {ConnectionPool} from "src/Basic_Patterns/Structural_Patterns/Flyweight/DB_connections/code/ConnectionPool";

const pool = new ConnectionPool();

/** Context variables */
const first_connection = pool.getConnection('Server=1;Database=Test;');
const second_connection = pool.getConnection('Serve=2;Database=Prod;');
const third_connection = pool.getConnection('Server=1;Database=Test;');

first_connection.connect();
second_connection.connect();
third_connection.connect();