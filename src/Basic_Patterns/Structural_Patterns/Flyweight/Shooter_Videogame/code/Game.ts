import {MovingParticle} from "src/Basic_Patterns/Structural_Patterns/Flyweight/Shooter_Videogame/code/MovingParticle";
import {Particle} from "src/Basic_Patterns/Structural_Patterns/Flyweight/Shooter_Videogame/code/Particle";

/** Container class */
class Game {
    private movingParticles: MovingParticle[] = [];

    public addParticle(
        coords: number[],
        vector: number[],
        speed: number,
        color: string,
        sprite: string
    ) {
        let particle = this.findParticle(color, sprite);
        if (!particle) {
            particle = new Particle(color, sprite);
        }
        const movingParticle = new MovingParticle(particle, coords, vector, speed);
        this.movingParticles.push(movingParticle);
    }

    private findParticle(color: string, sprite: string): Particle | undefined {
        for (const movingParticle of this.movingParticles) {
            if (movingParticle.particle.getColor() == color
            && movingParticle.particle.getSprite() === sprite) {
                return movingParticle.particle;
            }
        }
        return undefined;
    }

    public draw(canvas: HTMLCanvasElement): void {
        this.movingParticles.forEach(movingParticle => movingParticle.draw(canvas));
    }
}

export { Game };