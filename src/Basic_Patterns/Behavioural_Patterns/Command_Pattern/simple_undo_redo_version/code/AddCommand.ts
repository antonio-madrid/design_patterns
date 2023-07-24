import {Command} from "./commands/Command";

export class AddCommand implements Command {
    constructor(private list: string[], private item: string) {}

    execute() {
        this.list.push(this.item);
    }

    unExecute() {
        const itemIndex = this.list.indexOf(this.item);
        if (itemIndex > -1) {
            this.list.splice(itemIndex, 1);
        }
    }
}