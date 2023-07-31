import {BulletBill} from "../../interfaces/BulletBill";

/** Concrete Product of the Classic style family */
class ClassicBulletBill implements BulletBill {
    public chase(): void {
        console.log('Classic pixelated bullet Bill is chasing Mario.');
    }
}

export { ClassicBulletBill };