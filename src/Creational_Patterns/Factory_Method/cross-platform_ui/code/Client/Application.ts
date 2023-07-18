import {Dialog} from "../creators/Dialog";
import {WindowsDialog} from "../creators/WindowsDialog";
import {WebDialog} from "../creators/WebDialog";

class Application {
    private dialog!: Dialog;

    private initialize(): void {
        const config: { OS: string } = this.readApplicationConfigFile();

        if (config.OS === "Windows") {
            this.dialog = new WindowsDialog();
        } else if (config.OS === "Web") {
            this.dialog = new WebDialog();
        } else {
            throw new Error("Unknown operating system!");
        }
    }

    private readApplicationConfigFile(): { OS: string } {
        console.log("It should read a config file...")
        return { OS: "Windows" };
    }

    public main(): void {
        this.initialize();
        this.dialog.render();
    }
}

const app: Application = new Application();
app.main();