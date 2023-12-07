interface Mediator {
    notify(sender: object, event: string): void;
}

export { Mediator };