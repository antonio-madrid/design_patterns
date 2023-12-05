import {Game} from "src/Basic_Patterns/Structural_Patterns/Flyweight/Shooter_Videogame/code/Game";

const game = new Game();
const canvas = document.createElement('canvas');

game.addParticle([50, 100], [1, 0], 5, 'red', 'bullet.jpeg');
game.addParticle([150, 200], [0, 1], 3, 'blue', 'missile.png');
game.addParticle([200, 250], [1, 1], 4, 'green', 'shrapnel.gig');

game.draw(canvas);