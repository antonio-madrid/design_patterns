interface Builder {
    reset(): void;
    setSeats(seats: number): void;
    setEngine(engine: string): void;
    setTripComputer(tripComputer: boolean): void;
    setGPS(gps: boolean): void;
}

export { Builder };