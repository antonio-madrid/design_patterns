import {MusicPlayer} from "./MusicPlayer";
import {MP3Player} from "./MP3Player";
import {MP4PlayerAdapter} from "./MP4PlayerAdapter";
import {VLCPlayerAdapter} from "./VLCPlayerAdapter";

let mp3Player: MusicPlayer = new MP3Player();
mp3Player.playMP3('song.mp3');

let mp4Player: MusicPlayer = new MP4PlayerAdapter({
    playMP4: (filename: string) => console.log(`Playing MP4 file: ${filename}`)
}); // Creating-implementing a MP4Player while creating a MP4PlayerAdapter
mp4Player.playMP3('song.mp4');

let vlcPlayer: MusicPlayer = new VLCPlayerAdapter({
    playVLC: (filename: string) => console.log(`Playing VLC file: ${filename}`)
}); // Creating-implementing a VLCPlayer while creating a VLCPlayerAdapter
vlcPlayer.playMP3('song.vlc');
