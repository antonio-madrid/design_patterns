import {Mediator} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Authentication_Dialog/code/mediators/Mediator";
import {
    Component
} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Authentication_Dialog/code/components/Component";
import {
    Checkbox
} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Authentication_Dialog/code/components/Checkbox";
import {Textbox} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Authentication_Dialog/code/components/Textbox";
import {Button} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Authentication_Dialog/code/components/Button";

/** Concrete Mediator */
class AuthenticationDialog implements Mediator {
    title: string;
    loginOrRegisterCheckbox: Checkbox;
    loginUsername: Textbox;
    loginPassword: Textbox;
    registrationUsername: Textbox;
    registrationPassword: Textbox;
    registrationEmail: Textbox;
    okButton: Button;
    cancelButton: Button;

    constructor() {
        this.title = 'Login';
        this.loginOrRegisterCheckbox = new Checkbox(this);
        this.loginUsername = new Textbox(this);
        this.loginPassword = new Textbox(this);
        this.registrationUsername = new Textbox(this);
        this.registrationPassword = new Textbox(this);
        this.registrationEmail = new Textbox(this);
        this.okButton = new Button(this);
        this.cancelButton = new Button(this);
    }

    notify(sender: Component, event: string) {
        if (sender === this.loginOrRegisterCheckbox && event === 'check') {
            if (this.loginOrRegisterCheckbox.checked) {
                console.log('Login checkbox was checked');
                this.title = 'Login';
                this.loginUsername.show();
                this.loginPassword.show();
                this.registrationUsername.hide();
                this.registrationPassword.hide();
                this.registrationEmail.hide();
            } else {
                console.log('Login checkbox was unchecked');
                this.title = 'Register';
                this.loginUsername.hide();
                this.loginPassword.hide();
                this.registrationUsername.show();
                this.registrationPassword.show();
                this.registrationEmail.show();
            }
        }

        if (sender === this.okButton && event === 'click') {
            if (this.loginOrRegisterCheckbox.checked) {
                // Try to find user with specified credentials.
                console.log('Checking user\'s credentials');
            } else {
                // Create new user.
                console.log('Registering new user');
            }
        }
    }
}

export { AuthenticationDialog };