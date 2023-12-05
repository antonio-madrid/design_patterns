import {Circle} from "src/Basic_Patterns/Structural_Patterns/Composite/Vector_Graphics/code/Circle";
import {Group} from "src/Basic_Patterns/Structural_Patterns/Composite/Vector_Graphics/code/Group";

const circle1 = new Circle();
const circle2 = new Circle();
const group = new Group();

group.addGraphic(circle1);
group.addGraphic(circle2);

group.render();