import {DataMiner} from "src/Basic_Patterns/Behavioural_Patterns/Template_Method/Data_Miner/code/DataMiner";

class PDFDataMiner extends DataMiner {
    public extractData(file: string): string {
        console.log(`Extracting data from a PDF file: ${file}`);
        return 'pdfRawData';
    }
}

export { PDFDataMiner };