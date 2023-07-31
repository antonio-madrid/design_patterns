import {BulletBill} from "../../interfaces/BulletBill";

class New3dsBulletBill implements BulletBill {
    public chase(): void {
        console.log('New 3ds bullet Bill is chasing Mario.');
    }
}

export { New3dsBulletBill };