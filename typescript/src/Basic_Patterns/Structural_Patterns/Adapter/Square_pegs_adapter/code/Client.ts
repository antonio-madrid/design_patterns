import {RoundHole} from "src/Basic_Patterns/Structural_Patterns/Adapter/Square_pegs_adapter/code/RoundHole";
import {RoundPeg} from "src/Basic_Patterns/Structural_Patterns/Adapter/Square_pegs_adapter/code/RoundPeg";
import {SquarePeg} from "src/Basic_Patterns/Structural_Patterns/Adapter/Square_pegs_adapter/code/SquarePeg";
import {SquarePegAdapter} from "src/Basic_Patterns/Structural_Patterns/Adapter/Square_pegs_adapter/code/SquarePegAdapter";

let hole = new RoundHole(5);
let rpeg = new RoundPeg(5);
console.log(hole.fits(rpeg));

let small_sqpeg = new SquarePeg(5);
let large_sqpeg = new SquarePeg(10);
// hole.fits(small_sqpeg) // No compila, son tipos incompatibles
// hole.fits(large_sqpeg) // No compila, son tipos incompatibles

let small_sqpeg_adapter = new SquarePegAdapter(small_sqpeg);
let large_sqpeg_adapter = new SquarePegAdapter(large_sqpeg);
console.log(hole.fits(small_sqpeg_adapter)); // true
console.log(hole.fits(large_sqpeg_adapter)); // false
