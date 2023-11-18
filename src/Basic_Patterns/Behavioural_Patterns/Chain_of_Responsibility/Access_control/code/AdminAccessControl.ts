import {
    AccessControl
} from "src/Basic_Patterns/Behavioural_Patterns/Chain_of_Responsibility/Access_control/code/AccessControl";

class AdminAccessControl extends AccessControl {
    public checkAccess(userRole: string): boolean {
        if (userRole === 'admin') {
            return true;
        }
        return super.checkAccess(userRole);
    }
}

export { AdminAccessControl };