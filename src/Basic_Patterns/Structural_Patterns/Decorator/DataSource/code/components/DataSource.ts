interface DataSource {
    writeData(data: string): void;
    readData(): string;
}

export { DataSource };