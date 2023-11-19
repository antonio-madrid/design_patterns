/** State interface */
interface CharacterState {
    handleInput(input: Input): void;
    update(): void;
}

export { CharacterState };