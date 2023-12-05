import {File} from "src/Basic_Patterns/Structural_Patterns/Composite/File_System/code/File";
import {Directory} from "src/Basic_Patterns/Structural_Patterns/Composite/File_System/code/Directory";

const file1 = new File(120);
const file2 = new File(320);
const file3 = new File(230);

const folder1 = new Directory();
folder1.addComponent(file1);

const folder2 = new Directory();
folder2.addComponent(file2);
folder2.addComponent(file3);
folder2.addComponent(folder1); // a folder can contain other folders

console.log(folder2.getSize()); // 670