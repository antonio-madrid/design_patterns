interface OrderState {
    next(): void;
    cancel(): void;
    getStatus(): string;
}

export { OrderState };