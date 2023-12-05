/** This acts as the Product's Interface */
interface Button {
    render(): void;
    onClick(f: Function): void;
}

export { Button };