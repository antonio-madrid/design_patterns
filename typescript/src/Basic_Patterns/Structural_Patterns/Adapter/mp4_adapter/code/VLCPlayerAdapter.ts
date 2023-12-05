import {MusicPlayer} from "src/Basic_Patterns/Structural_Patterns/Adapter/mp4_adapter/code/MusicPlayer";
import {VLCPlayer} from "src/Basic_Patterns/Structural_Patterns/Adapter/mp4_adapter/code/VLCPlayer";

export class VLCPlayerAdapter implements MusicPlayer {
    private vlcPlayer: VLCPlayer;

    constructor(vlcPlayer: VLCPlayer) {
        this.vlcPlayer = vlcPlayer;
    }

    playMP3(filename: string) {
        this.vlcPlayer.playVLC(filename);
    }
}