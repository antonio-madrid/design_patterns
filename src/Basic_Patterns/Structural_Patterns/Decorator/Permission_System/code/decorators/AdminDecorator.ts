import {
    UserDecorator
} from "src/Basic_Patterns/Structural_Patterns/Decorator/Permission_System/code/decorators/UserDecorator";

class AdminDecorator extends UserDecorator {
    public getPermissions(): string[] {
        return [...super.getPermissions(), 'write', 'delete'];
    }
}

export { AdminDecorator };