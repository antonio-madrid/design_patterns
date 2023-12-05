import {User} from "src/Basic_Patterns/Structural_Patterns/Decorator/Permission_System/code/components/User";

class BasicUser implements User {
    public getPermissions(): string[] {
        return ['read'];
    }
}

export { BasicUser };