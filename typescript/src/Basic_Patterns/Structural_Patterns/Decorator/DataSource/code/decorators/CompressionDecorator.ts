import {
    DataSourceDecorator
} from "src/Basic_Patterns/Structural_Patterns/Decorator/DataSource/code/decorators/DataSourceDecorator";

class CompressionDecorator extends DataSourceDecorator {
    public writeData(data: string) {
        const compressedData = `compressed(${data})`;
        console.log('Compressing data...');
        this.wrappee.writeData(compressedData);
    }

    public readData(): string {
        const data = this.wrappee.readData();
        console.log('Decompressing data');
        return `decompressed(${data})`;
    }
}

export { CompressionDecorator };