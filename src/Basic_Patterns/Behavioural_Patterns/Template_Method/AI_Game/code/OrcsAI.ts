import {GameAI} from "src/Basic_Patterns/Behavioural_Patterns/Template_Method/AI_Game/code/GameAI";

class OrcsAI extends GameAI {
    public attack() {
        console.log("Los orcos atacan de manera agresiva!");
    }

    public buildStructures() {
        console.log("Los orcos construyen estructuras de madera.");
    }

    public buildUnits() {
        console.log("Los orcos construyen unidades.");
    }

    public sendScouts(position: string) {
        console.log(`Enviando Orcos exploradores a ${position}.`);
    }

    public sendWarriors(position: string) {
        console.log(`Enviando Orcos guerreros a masacrar la posición ${position}.`);
    }

}

export { OrcsAI };