import {Device} from "src/Basic_Patterns/Structural_Patterns/Bridge/Remote_Control/code/implementations/Device";

class RemoteControl {
    protected device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    togglePower(): void {
        if (this.device.isEnabled()) {
            console.log('Turn Off');
            this.device.disable();
        } else {
            console.log('Turn On');
            this.device.enable();
        }
    }

    volumeDown(): void {
        console.log('Volume Down');
        this.device.setVolume(this.device.getVolume() - 10);
    }

    volumeUp(): void {
        console.log('Volume Up');
        this.device.setVolume(this.device.getVolume() + 10);
    }

    channelDown(): void {
        console.log('Channel Down');
        this.device.setChannel(this.device.getChannel() - 1);
    }

    channelUp(): void {
        console.log('Channel Up');
        this.device.setChannel(this.device.getChannel() + 1);
    }
}

export { RemoteControl };