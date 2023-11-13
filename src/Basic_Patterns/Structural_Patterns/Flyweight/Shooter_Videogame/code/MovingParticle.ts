import {Particle} from "src/Basic_Patterns/Structural_Patterns/Flyweight/Shooter_Videogame/code/Particle";

/** Context clas */
class MovingParticle {
    constructor(
        public particle: Particle,
        private coords: number[],
        private vector: number[],
        private speed: number
    ) {}

    public move(): void {
        this.particle.move(this.coords, this.vector, this.speed);
    }

    public draw(canvas: HTMLCanvasElement): void {
        this.particle.draw(this.coords, canvas);
    }
}

export { MovingParticle };