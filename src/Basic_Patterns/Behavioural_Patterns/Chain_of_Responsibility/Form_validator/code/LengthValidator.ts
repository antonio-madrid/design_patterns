import {Validator} from "src/Basic_Patterns/Behavioural_Patterns/Chain_of_Responsibility/Form_validator/code/Validator";

class LengthValidator extends Validator {
    public validate(value: string): boolean {
        const isValidLength = value.length > 6;
        return isValidLength && super.validate(value);
    }
}

export { LengthValidator };