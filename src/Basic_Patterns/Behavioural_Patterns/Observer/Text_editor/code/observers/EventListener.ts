/** Observer Interface */
interface EventListener {
    update(filename: string): void;
}

export { EventListener };