/** Observer Interface */
interface Subscriber {
    receive(news: string): void;
}

export { Subscriber };