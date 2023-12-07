import {Widget} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Widgets/code/components/Widget";

/** Component */
class TextWidget extends Widget {
    update(message: string): void {
        console.log(`TextWidget updated with message: ${message}`);
    }
}

export { TextWidget };