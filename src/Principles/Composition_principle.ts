
class Engine {
    public start(): void {
        console.log('The engine has started up.')
    }
}

class Wheel {
    public rotate(): void {
        console.log('The wheel is spinning');
    }
}

/** A class is composed by other classes. */
class Car {
    private engine!: Engine;
    private wheel!: Wheel;

    public constructor() {
        this.engine = new Engine();
        this.wheel = new Wheel();
    }

    public move(): void {
        this.engine.start();
        this.wheel.rotate();
    }

}

const car = new Car();
car.move();