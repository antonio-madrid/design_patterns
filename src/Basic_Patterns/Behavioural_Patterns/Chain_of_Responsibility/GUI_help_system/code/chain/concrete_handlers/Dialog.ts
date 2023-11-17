import {
    Container
} from "src/Basic_Patterns/Behavioural_Patterns/Chain_of_Responsibility/GUI_help_system/code/chain/Container";

/** Concrete Handler */
class Dialog extends Container {
    private wikiPageUrl?: string;

    public setWikiPageUrl(url: string): void {
        this.wikiPageUrl = url;
    }

    public showHelp() {
        if (this.wikiPageUrl) {
            console.log(`Opening wiki page: ${this.wikiPageUrl}`);
        } else {
            super.showHelp();
        }
    }
}

export { Dialog };