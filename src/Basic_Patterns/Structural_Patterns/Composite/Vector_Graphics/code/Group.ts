import {Graphic} from "src/Basic_Patterns/Structural_Patterns/Composite/Vector_Graphics/code/Graphic";

class Group implements Graphic {
    private graphics: Graphic[] = [];

    render() {
        console.log('Rendering a group of graphics:');
        this.graphics.forEach(graphic => graphic.render());
    }

    addGraphic(graphic: Graphic) {
        this.graphics.push(graphic);
    }
}

export { Group };