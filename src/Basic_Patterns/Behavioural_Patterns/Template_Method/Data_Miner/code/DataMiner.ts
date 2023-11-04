abstract class DataMiner {
    /** Template method */
    public mine(path: string) {
        const file = this.openFile(path);
        const rawData = this.extractData(file);
        const data = this.parseData(rawData);
        const analysis = this.analyzeData(data);
        this.sendReport(analysis);
        this.closeFile(file);
    }

    /** Default implementation */
    protected openFile(path: string): string {
        console.log(`Opening file from path: ${path}`);
        return 'fileContent';
    }

    protected abstract extractData(file: string): string;

    /** Default implementation */
    protected parseData(rawData: string): any {
        console.log(`Parsing data: ${rawData}`);
        return { parsed: true };
    }

    /** Default implementation */
    protected analyzeData(data: any): any {
        console.log(`Analyzing data: ${JSON.stringify(data)}`);
        return { analyzed: true };
    }

    /** Default implementation */
    protected sendReport(analysis: any) {
        console.log(`Sending report: ${JSON.stringify(analysis)}`);
    }

    /** Default implementation */
    protected closeFile(file: string) {
        console.log(`Closing file: ${file}`);
    }
}

export { DataMiner };