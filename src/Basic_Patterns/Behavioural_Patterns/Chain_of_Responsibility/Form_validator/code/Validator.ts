abstract class Validator {
    protected nextValidator!: Validator;

    public setNext(validator: Validator): Validator {
        this.nextValidator = validator;
        return validator;
    }

    public validate(request: string): boolean {
        if (this.nextValidator) {
            return this.nextValidator.validate(request);
        }

        return true;
    }
}

export { Validator };