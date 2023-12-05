import {Application} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Text_editor/code/Application";

const app = new Application();
const editor = app.config();

editor.openFile("test.txt");
editor.saveFile();
