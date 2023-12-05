import {AudioDevice} from "src/Basic_Patterns/Structural_Patterns/Bridge/Audio_Player/code/implementations/AudioDevice";

class Headphones implements AudioDevice {
    playSound(sound: string) {
        console.log(`Playing ${sound} through the headphones`);
    }
}

export { Headphones };