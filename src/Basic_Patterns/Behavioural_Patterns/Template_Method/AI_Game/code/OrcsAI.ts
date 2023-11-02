import {GameAI} from "src/Basic_Patterns/Behavioural_Patterns/Template_Method/AI_Game/code/GameAI";

class OrcsAI extends GameAI {
    protected attack() {
        console.log("Los orcos atacan de manera agresiva!");
    }

    protected getScoutPosition() {
        return "las montañas";
    }

    protected getWarriorPosition() {
        return "el fuerte enemigo";
    }
}

export { OrcsAI };