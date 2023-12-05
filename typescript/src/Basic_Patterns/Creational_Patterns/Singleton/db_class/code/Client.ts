import {Database} from "src/Basic_Patterns/Creational_Patterns/Singleton/db_class/code/Database";

const db = Database.getInstance();
db.query('SELECT * FROM users;');

const db2 = Database.getInstance(); // same object as db
db2.query('SELECT * FROM products;');