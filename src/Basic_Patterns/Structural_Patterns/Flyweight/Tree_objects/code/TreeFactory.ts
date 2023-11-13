import {TreeType} from "src/Basic_Patterns/Structural_Patterns/Flyweight/Tree_objects/code/TreeType";

/** Flyweight factory */
class TreeFactory {
    private static treeTypes: Map<string, TreeType> = new Map();

    public static getTreeType(name: string, color: string, texture: string): TreeType {
        const key = `${name}-${color}-${texture}`;
        let type = TreeFactory.treeTypes.get(key);

        if (!type) {
            type = new TreeType(name, color, texture);
            TreeFactory.treeTypes.set(key, type);
        }

        return type;
    }
}

export { TreeFactory };