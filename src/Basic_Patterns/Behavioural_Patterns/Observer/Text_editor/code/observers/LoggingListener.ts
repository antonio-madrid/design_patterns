import {EventListener} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Text_editor/code/observers/EventListener";

/** Concrete Observer */
class LoggingListener implements EventListener {
  private log: string;
  private message: string;

  constructor(logFilename: string, message: string) {
    this.log = logFilename;
    this.message = message;
  }

  public update(filename: string): void {
      console.log(this.message.replace("%s", filename));
  }
}

export {LoggingListener};