import {
    AccessControl
} from "src/Basic_Patterns/Behavioural_Patterns/Chain_of_Responsibility/Access_control/code/AccessControl";

class UserAccessControl extends AccessControl {
    public checkAccess(userRole: string): boolean {
        if (userRole === 'user') {
            return true;
        }
        return super.checkAccess(userRole);
    }
}

export { UserAccessControl };