/** Singleton Database class */
class Database {
    private static instance: Database | null = null;

    private constructor() {
        console.log('Creating a new instance of Database....');
    }

    public static getInstance(): Database {
        if (Database.instance === null) {
            Database.instance = new Database();
        }

        return Database.instance;
    }

    public query(sql: string): void {
        console.log(`Executing the following SQL: ${sql}`);
    }
}

export { Database };