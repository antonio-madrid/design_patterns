import {Mediator} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Widgets/code/mediators/Mediator";
import {Widget} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Widgets/code/components/Widget";
import {Button} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Widgets/code/components/Button";
import {TextWidget} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Widgets/code/components/TextWidget";

/** Concrete Mediator */
class WidgetMediator implements Mediator {
    constructor(
        private button: Button,
        private text: TextWidget
    ) {}

    notify(sender: Widget, event: string) {
        if (sender === this.button && event === 'click') {
            this.text.update('Button was clicked');
        }
    }
}

export { WidgetMediator };