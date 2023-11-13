import {Tree} from "src/Basic_Patterns/Structural_Patterns/Flyweight/Tree_objects/code/Tree";
import {TreeFactory} from "src/Basic_Patterns/Structural_Patterns/Flyweight/Tree_objects/code/TreeFactory";

/** Client class */
class Forest {
    public trees: Tree[] = [];

    public plantTree(x: number, y: number, name: string, color: string, texture: string): void {
        const type = TreeFactory.getTreeType(name, color, texture);
        const tree = new Tree(x, y, type);
        this.trees.push(tree);
    }

    public draw(canvas: HTMLCanvasElement): void {
        this.trees.forEach(tree => tree.draw(canvas));
    }
}

export { Forest };