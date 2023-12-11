interface Iterator<T> {
    next(): T | null;
    hasNext(): boolean;
}

export { Iterator };