import {BasicUser} from "src/Basic_Patterns/Structural_Patterns/Decorator/Permission_System/code/BasicUser";
import {
    AdminDecorator
} from "src/Basic_Patterns/Structural_Patterns/Decorator/Permission_System/code/decorators/AdminDecorator";

const basicUser = new BasicUser();
const adminUser = new AdminDecorator(basicUser);

console.log(adminUser.getPermissions());