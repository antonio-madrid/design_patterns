import {
    EmailValidator
} from "src/Basic_Patterns/Behavioural_Patterns/Chain_of_Responsibility/Form_validator/code/EmailValidator";
import {
    LengthValidator
} from "src/Basic_Patterns/Behavioural_Patterns/Chain_of_Responsibility/Form_validator/code/LengthValidator";

const validator1 = new EmailValidator();
const validator2 = new LengthValidator();

validator1.setNext(validator2);

console.log(validator1.validate('test@example.com'));
console.log(validator1.validate('invalid_email'));
