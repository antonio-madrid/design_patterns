import {
    FileSystemComponent
} from "src/Basic_Patterns/Structural_Patterns/Composite/File_System/code/FileSystemComponent";

class File implements FileSystemComponent {
    constructor(private size: number) {}

    getSize(): number {
        return this.size;
    }
}

export { File };
