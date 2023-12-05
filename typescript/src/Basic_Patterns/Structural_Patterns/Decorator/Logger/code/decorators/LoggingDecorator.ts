import {Process} from "src/Basic_Patterns/Structural_Patterns/Decorator/Logger/code/components/Process";

class LoggingDecorator implements Process {
    constructor(protected process: Process) {}

    public execute(): void {
        console.log('Start logging');
        this.process.execute();
        console.log('End logging');
    }
}

export { LoggingDecorator };