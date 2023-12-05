import {GUIFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/GUI_factory/code/factories/GUIFactory";
import {WinFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/GUI_factory/code/factories/WinFactory";
import {MacFactory} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/GUI_factory/code/factories/MacFactory";
import {Application} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/GUI_factory/code/client/Application";

let factory: GUIFactory;
const config: { OS: string } = { OS: 'Windows'};
if (config.OS === 'Windows') {
    factory = new WinFactory();
} else if (config.OS === 'Mac') {
    factory = new MacFactory();
} else {
    throw new Error('Unknown operating system.');
}

const app = new Application(factory);
app.createUI();
app.paint();