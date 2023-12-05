import {DataMiner} from "src/Basic_Patterns/Behavioural_Patterns/Template_Method/Data_Miner/code/DataMiner";

class CSVDataMiner extends DataMiner {
    public extractData(file: string): string {
        console.log(`Extracting data from a CSV file: ${file}`);
        return 'csvRawData';
    }
}

export { CSVDataMiner };