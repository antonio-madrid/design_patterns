interface Mediator {
    request(endpoint: string, data?: any): void;
}

export { Mediator };