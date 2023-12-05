import {DataMiner} from "src/Basic_Patterns/Behavioural_Patterns/Template_Method/Data_Miner/code/DataMiner";

class DocDataMiner extends DataMiner {
    public extractData(file: string): string {
        console.log(`Extracting data from a DOC file: ${file}`);
        return 'docRawData';
    }
}

export { DocDataMiner };