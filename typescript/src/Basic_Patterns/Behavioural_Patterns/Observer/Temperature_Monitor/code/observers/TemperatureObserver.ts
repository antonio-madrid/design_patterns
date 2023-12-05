/** Observer Interface */
interface TemperatureObserver {
    update(temperature: number): void;
}

export { TemperatureObserver };