import {RoundPeg} from "./RoundPeg";
import {SquarePeg} from "./SquarePeg";

// SquarePegAdapter inherits from RoundPeg, making it compatible with RoundHole's interface
// SquarePegAdapter acts as a RoundPeg
export class SquarePegAdapter extends RoundPeg {
    // SquarePegAdapter is hiding a SquarePeg instance
    private peg: SquarePeg;

    constructor(peg: SquarePeg) {
        // We have to initialize the RoundPeg constructor as a child class SquarePegAdapter is
        super(peg.getWidth() * Math.sqrt(2) / 2);
        this.peg = peg;
    }

    getRadius(): number {
        // The adapter pretends to be a RoundPeg encapsulating SquarePeg operations
        return this.peg.getWidth() * Math.sqrt(2) / 2;
    }

}