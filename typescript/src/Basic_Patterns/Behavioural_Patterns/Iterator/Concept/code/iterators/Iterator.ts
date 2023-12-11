interface Iterator<T> {
    current(): T;

    next(): T;

    key(): number;

    valid(): boolean;

    rewind(): void;
}

export { Iterator };