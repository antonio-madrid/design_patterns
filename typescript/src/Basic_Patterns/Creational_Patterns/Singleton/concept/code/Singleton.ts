class Singleton {
    private static instance: Singleton;

    private constructor() {}

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            console.log('Creating a new instance of Singleton for very first time....');
            Singleton.instance = new Singleton();
        }

        console.log('Returning the same instance of Singleton....');
        return Singleton.instance;
    }

    public someBusinessLogic(): void {
        console.log('Doing some business logic....');
    }
}

export {Singleton};