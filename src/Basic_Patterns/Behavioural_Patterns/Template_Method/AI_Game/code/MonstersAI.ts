import {GameAI} from "src/Basic_Patterns/Behavioural_Patterns/Template_Method/AI_Game/code/GameAI";

class MonstersAI extends GameAI {
    protected attack() {
        console.log("Los monstruos atacan!");
    }

    protected buildStructures() {
        console.log("Los monstruos no construyen estructuras.");
    }

    protected getScoutPosition() {
        return "el bosque oscuro";
    }

    protected getWarriorPosition() {
        return "la aldea cercana";
    }
}

export { MonstersAI };