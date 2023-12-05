import {Forest} from "src/Basic_Patterns/Structural_Patterns/Flyweight/Tree_objects/code/Forest";

const forest = new Forest();
forest.plantTree(1, 2, 'Oak', 'Green', 'OakTexture');
forest.plantTree(5, 3, 'Birch', 'White', 'BirchTexture');

const canvas = document.createElement('canvas');

forest.draw(canvas);