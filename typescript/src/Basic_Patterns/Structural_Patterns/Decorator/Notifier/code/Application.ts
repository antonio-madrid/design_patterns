import {Notifier} from "src/Basic_Patterns/Structural_Patterns/Decorator/Notifier/code/components/Notifier";

class Application {
    private notifier!: Notifier;

    public setNotifier(notifier: Notifier): void {
        this.notifier = notifier;
    }

    public doSomething(): void {
        console.log('Doing some business logic');
        this.notifier.send('Alert!');
    }
}

export { Application };