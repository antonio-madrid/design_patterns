import {
    AdminAccessControl
} from "src/Basic_Patterns/Behavioural_Patterns/Chain_of_Responsibility/Access_control/code/AdminAccessControl";
import {
    UserAccessControl
} from "src/Basic_Patterns/Behavioural_Patterns/Chain_of_Responsibility/Access_control/code/UserAccessControl";
import {
    GuestAccessControl
} from "src/Basic_Patterns/Behavioural_Patterns/Chain_of_Responsibility/Access_control/code/GuestAccessControl";

const adminControl = new AdminAccessControl();
const userControl = new UserAccessControl();
const guestControl = new GuestAccessControl();

adminControl.setNext(userControl).setNext(guestControl);

console.log(adminControl.checkAccess('admin'));
console.log(adminControl.checkAccess('user'));
console.log(adminControl.checkAccess('guest'));
console.log(adminControl.checkAccess('invalid_role'));
