import {BulletBill} from "src/Basic_Patterns/Creational_Patterns/Abstract_Factory/Mario_Maker_Factory/code/products/interfaces/BulletBill";

/** Concrete Product of the GameBoy family */
class GameboyBulletBill implements BulletBill {
    public chase(): void {
        console.log('Black & white pixelated bullet Bill is chasing Mario.');
    }
}

export { GameboyBulletBill };