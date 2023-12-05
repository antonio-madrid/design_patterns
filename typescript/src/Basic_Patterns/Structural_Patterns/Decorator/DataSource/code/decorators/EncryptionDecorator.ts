import {
    DataSourceDecorator
} from "src/Basic_Patterns/Structural_Patterns/Decorator/DataSource/code/decorators/DataSourceDecorator";

class EncryptionDecorator extends DataSourceDecorator {
    public writeData(data: string) {
        const encryptedData = `encrypted(${data})`;
        console.log('Encrypting data...');
        this.wrappee.writeData(encryptedData);
    }

    public readData(): string {
        const data = this.wrappee.readData();
        console.log('Decrypting data...');
        return `decrypted(${data})`;
    }
}

export { EncryptionDecorator };