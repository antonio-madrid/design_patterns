/** Prototype Interface in form of an Abstract Class */
abstract class Shape {
    public width!: number;
    public height!: number;
    public color!: string;

    /** JS does not allow method overriding */
    protected constructor(width: number, height: number, color: string) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    public abstract clone(): Shape;
}

export {Shape};

