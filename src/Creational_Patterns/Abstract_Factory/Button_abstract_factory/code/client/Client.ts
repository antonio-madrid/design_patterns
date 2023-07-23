import {GUIFactory} from "../creators/GUIFactory";
import {WinFactory} from "../creators/WinFactory";
import {MacFactory} from "../creators/MacFactory";
import {Application} from "./Application";

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