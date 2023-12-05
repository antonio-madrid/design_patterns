import {MusicPlayer} from "src/Basic_Patterns/Structural_Patterns/Adapter/mp4_adapter/code/MusicPlayer";

export class MP3Player implements MusicPlayer {
    playMP3(filename: string) {
        console.log(`Playing MP3 file: ${filename}`)
    }
}