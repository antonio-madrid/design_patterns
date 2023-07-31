import {BulletBill} from "../../interfaces/BulletBill";

/** Concrete Product of the New Super Mario Bros style family */
class New3dsBulletBill implements BulletBill {
    public chase(): void {
        console.log('New 3ds bullet Bill is chasing Mario.');
    }
}

export { New3dsBulletBill };