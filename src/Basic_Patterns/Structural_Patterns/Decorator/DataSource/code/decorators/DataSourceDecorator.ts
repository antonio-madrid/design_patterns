import {DataSource} from "src/Basic_Patterns/Structural_Patterns/Decorator/DataSource/code/components/DataSource";

/** Decorator base class */
class DataSourceDecorator implements DataSource {
    constructor(protected wrappee: DataSource) {}

    public writeData(data: string) {
        this.wrappee.writeData(data);
    }

    public readData(): string {
        return this.wrappee.readData();
    }
}

export { DataSourceDecorator };