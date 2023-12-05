import {BulletBill} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/BulletBill";

/** Concrete Product of the Classic style family */
class ClassicBulletBill implements BulletBill {
    public chase(): void {
        console.log('Classic pixelated bullet Bill is chasing Mario.');
    }
}

export { ClassicBulletBill };