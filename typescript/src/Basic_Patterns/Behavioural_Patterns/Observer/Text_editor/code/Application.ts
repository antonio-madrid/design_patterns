import {Editor} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Text_editor/code/Editor";
import {
    LoggingListener
} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Text_editor/code/observers/LoggingListener";
import {
    EmailAlertsListener
} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Text_editor/code/observers/EmailAlertsListener";

/** Client class */
class Application {
    public config() {
        const editor = new Editor();

        const logger = new LoggingListener(
            "/path/to/log.txt",
            "Someone has opened the file: %s"
        );
        editor.events.subscribe("open", logger);

        const emailAlerts = new EmailAlertsListener(
            "adming@example.com",
            "Someone has changed the file: %s"
        );
        editor.events.subscribe("save", emailAlerts);

        return editor;
    }
}

export {Application};
