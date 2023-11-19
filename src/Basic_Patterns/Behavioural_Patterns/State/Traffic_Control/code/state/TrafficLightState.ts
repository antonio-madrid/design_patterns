/** State interface */
interface TrafficLightState {
    change(): void;
    sign(): string;
}

export { TrafficLightState };