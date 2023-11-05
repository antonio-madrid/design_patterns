import {Speaker} from "src/Basic_Patterns/Structural_Patterns/Bridge/Audio_Player/code/implementations/Speaker";
import {AudioPlayer} from "src/Basic_Patterns/Structural_Patterns/Bridge/Audio_Player/code/abstractions/AudioPlayer";
import {Headphones} from "src/Basic_Patterns/Structural_Patterns/Bridge/Audio_Player/code/implementations/Headphones";

const speaker = new Speaker();
const audioPlayer1 = new AudioPlayer(speaker);
audioPlayer1.play("The Beatles - Let It Be");

const headphones = new Headphones();
const audioPlayer2 = new AudioPlayer(headphones);
audioPlayer2.play("Another Girl Another Planet - The Only Ones");
