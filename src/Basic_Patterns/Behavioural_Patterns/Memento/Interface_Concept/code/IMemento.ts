interface IMemento {
    getState(): string;
    getName(): string;
    getDate(): string;
}

export { IMemento };