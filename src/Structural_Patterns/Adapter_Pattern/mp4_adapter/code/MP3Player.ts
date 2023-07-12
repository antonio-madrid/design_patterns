import {MusicPlayer} from "./MusicPlayer";

export class MP3Player implements MusicPlayer {
    playMP3(filename: string) {
        console.log(`Playing MP3 file: ${filename}`)
    }
}