import {User} from "src/Basic_Patterns/Structural_Patterns/Decorator/Permission_System/code/components/User";

class UserDecorator implements User {
    constructor(protected user: User) {}

    public getPermissions(): string[] {
        return this.user.getPermissions();
    }
}

export { UserDecorator };