import {GameAI} from "src/Basic_Patterns/Behavioural_Patterns/Template_Method/AI_Game/code/GameAI";

class MonstersAI extends GameAI {
    public attack() {
        console.log("Los monstruos atacan de forma caotica!");
    }

    public collectResources() {
        console.log("Los monstruos recolectan recursos.");
    }

    public buildStructures() {
        console.log("Los monstruos no construyen estructuras.");
    }

    public buildUnits() {
        console.log("Los monstruos multiplican unidades.");
    }

    public sendScouts(position: string) {
        console.log(`Monstruos exploran ${position}.`);
    }

    public sendWarriors(position: string) {
        console.log(`Monstruos salvajes se acercan a ${position}.`);
    }

}

export { MonstersAI };