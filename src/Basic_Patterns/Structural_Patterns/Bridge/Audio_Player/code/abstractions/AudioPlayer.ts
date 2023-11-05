import {AudioDevice} from "src/Basic_Patterns/Structural_Patterns/Bridge/Audio_Player/code/implementations/AudioDevice";

class AudioPlayer {
    constructor(protected device: AudioDevice) {}

    play(sound: string) {
        this.device.playSound(sound);
    }
}

export { AudioPlayer };