import {
    AuthenticationDialog
} from "src/Basic_Patterns/Behavioural_Patterns/Mediator/Authentication_Dialog/code/mediators/AuthenticationDialog";

const authDialog = new AuthenticationDialog();
authDialog.loginOrRegisterCheckbox.click();

authDialog.registrationUsername.text = 'Antonio';
authDialog.registrationPassword.text = '123456';
authDialog.registrationEmail.text = 'test@test.com';

authDialog.okButton.click();
