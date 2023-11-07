import {
    FileSystemComponent
} from "src/Basic_Patterns/Structural_Patterns/Composite/File_System/code/FileSystemComponent";

class Directory implements FileSystemComponent {
    private children: FileSystemComponent[] = [];

    getSize(): number {
        return this.children.reduce((total, child) => total + child.getSize(), 0);
    }

    addComponent(component: FileSystemComponent): void {
        this.children.push(component);
    }
}

export { Directory };