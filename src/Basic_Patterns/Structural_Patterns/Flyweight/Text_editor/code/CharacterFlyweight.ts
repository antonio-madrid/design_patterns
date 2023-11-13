class CharacterFlyweight {
    constructor(
        private readonly char: string
    ) {}

    display(): string {
        return this.char;
    }
}

export { CharacterFlyweight };