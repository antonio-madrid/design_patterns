import {Database} from "./Database";

const db = Database.getInstance();
db.query('SELECT * FROM users;');

const db2 = Database.getInstance(); // same object as db
db2.query('SELECT * FROM products;');