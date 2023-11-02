import {DataMiner} from "src/Basic_Patterns/Behavioural_Patterns/Template_Method/Data_Miner/code/DataMiner";
import {PDFDataMiner} from "src/Basic_Patterns/Behavioural_Patterns/Template_Method/Data_Miner/code/PDFDataMiner";
import {CSVDataMiner} from "src/Basic_Patterns/Behavioural_Patterns/Template_Method/Data_Miner/code/CSVDataMiner";
import {DocDataMiner} from "src/Basic_Patterns/Behavioural_Patterns/Template_Method/Data_Miner/code/DocDataMiner";

const pdfMiner: DataMiner = new PDFDataMiner();
pdfMiner.mine('pathoToPDFFile');

const csvMiner: DataMiner = new CSVDataMiner();
csvMiner.mine('pathoToCSVFile');

const docMiner: DataMiner = new DocDataMiner();
docMiner.mine('pathoToDOCFile');