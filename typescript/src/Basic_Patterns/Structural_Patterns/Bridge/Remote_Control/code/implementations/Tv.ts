import {Device} from "src/Basic_Patterns/Structural_Patterns/Bridge/Remote_Control/code/implementations/Device";

class Tv implements Device {
    private on = false;
    private volume = 30;
    private channel = 1;

    isEnabled(): boolean {
        return this.on;
    }

    enable(): void {
        this.on = true;
    }

    disable(): void {
        this.on = false;
    }

    getVolume(): number {
        return this.volume;
    }

    setVolume(percent: number) {
        this.volume = percent;
    }

    getChannel(): number {
        return this.channel;
    }

    setChannel(channel: number) {
        this.channel = channel;
    }
}

export { Tv };