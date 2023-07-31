import {BulletBill} from "../../interfaces/BulletBill";

class GameboyBulletBill implements BulletBill {
    public chase(): void {
        console.log('Black & white pixelated bullet Bill is chasing Mario.');
    }
}

export { GameboyBulletBill };