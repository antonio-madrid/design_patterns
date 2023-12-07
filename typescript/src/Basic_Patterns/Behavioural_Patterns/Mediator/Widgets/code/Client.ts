import {Button} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Widgets/code/components/Button";
import {TextWidget} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Widgets/code/components/TextWidget";
import {WidgetMediator} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Widgets/code/mediators/WidgetMediator";

const button = new Button();
const text = new TextWidget();
const mediator = new WidgetMediator(button, text);

button.setMediator(mediator);
text.setMediator(mediator);

button.click();