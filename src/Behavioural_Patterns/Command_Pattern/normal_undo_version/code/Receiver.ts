export class Receiver {

    private state: string;

    constructor() {
        this.state = '';
    }

    getState() {
        return this.state;
    }

    setState(input: string) {
        console.log('Receiver object changing its state.')
        this.state = input;
    }

    doSomething() {
        console.log('Receiver object its performing an action withing logic...')
    }

    getSomeInformation() {
        if (this.state == '') return 'The receiver state never was changed.'

        return 'The receiver state has been changed at least once.'
    }
}