import {Rectangle} from "./Prototypes/Rectangle";
import {Circle} from "./Prototypes/Circle";

const circle: Circle = new Circle(10, 10, "red", 10, "Circle1");
const rectangle: Rectangle = new Rectangle(10, 10, "red", "Rectangle1");
const circleClone: Circle = circle.clone();
const rectangleClone: Rectangle = rectangle.clone();

if (circle === circleClone) {
    console.log("Circle instances are equal, is not a copy");
} else {
    console.log("circleClone is a shallow copy of circle");
}


if (rectangle === rectangleClone) {
    console.log("Rectangle instances are equal, is not a copy");
} else {
    console.log("rectangleClone is a shallow copy of rectangle");
}