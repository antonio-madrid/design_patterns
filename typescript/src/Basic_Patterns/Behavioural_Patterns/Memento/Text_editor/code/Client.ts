import {Editor} from "src/Basic_Patterns/Behavioural_Patterns/Memento/Text_editor/code/Editor";
import {Command} from "src/Basic_Patterns/Behavioural_Patterns/Memento/Text_editor/code/Command";

const editor = new Editor();
const command = new Command(editor);

editor.setText("Hello world!");
editor.setCursor(2, 3);
editor.setSelectionWidth(5);
console.log(editor.toString());

command.makeBackup();

editor.setText("Hello world! I'm a new text!");
editor.setCursor(4, 5);
editor.setSelectionWidth(10);
console.log(editor.toString());

command.undo();

console.log(editor.toString());
