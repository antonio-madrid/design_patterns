import {MusicPlayer} from "./MusicPlayer";
import {VLCPlayer} from "./VLCPlayer";

export class VLCPlayerAdapter implements MusicPlayer {
    private vlcPlayer: VLCPlayer;

    constructor(vlcPlayer: VLCPlayer) {
        this.vlcPlayer = vlcPlayer;
    }

    playMP3(filename: string) {
        this.vlcPlayer.playVLC(filename);
    }
}