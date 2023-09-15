import {MusicPlayer} from "./MusicPlayer";
import {MP4Player} from "./MP4Player";

export class MP4PlayerAdapter implements MusicPlayer {
    private mp4Player: MP4Player;

    constructor(mp4Player: MP4Player) {
        this.mp4Player = mp4Player;
    }

    playMP3(filename: string) {
        this.mp4Player.playMP4(filename);
    }
}