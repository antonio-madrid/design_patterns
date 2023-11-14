import {DataSource} from "src/Basic_Patterns/Structural_Patterns/Decorator/Notifier/code/DataSource";

class FileDataSource implements DataSource {
    constructor(private filename: string) {}

    public writeData(data: string) {
        console.log(`Writing data to ${this.filename}: ${data}`);
    }

    public readData(): string {
        console.log(`Reading data from file: ${this.filename}`);
        return 'data';
    }
}

export { FileDataSource };