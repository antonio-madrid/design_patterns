import {BulletBill} from "../../interfaces/BulletBill";

class ClassicBulletBill implements BulletBill {
    public chase(): void {
        console.log('Classic pixelated bullet Bill is chasing Mario.');
    }
}

export { ClassicBulletBill };