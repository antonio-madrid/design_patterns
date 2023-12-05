import {Validator} from "src/Basic_Patterns/Behavioural_Patterns/Chain_of_Responsibility/Form_validator/code/Validator";

class EmailValidator extends Validator {
    public validate(value: string): boolean {
        const isValidEmail = value.includes('@');
        return isValidEmail && super.validate(value);
    }
}

export { EmailValidator };