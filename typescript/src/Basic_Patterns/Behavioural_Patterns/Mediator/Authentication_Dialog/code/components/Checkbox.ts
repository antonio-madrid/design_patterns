import {
    Component
} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Authentication_Dialog/code/components/Component";

class Checkbox extends Component {
    checked: boolean = false;

    check(): void {
        this.checked = !this.checked;
        this.dialog.notify(this, 'check');
    }
}

export { Checkbox };