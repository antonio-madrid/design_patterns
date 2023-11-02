import {OrcsAI} from "src/Basic_Patterns/Behavioural_Patterns/Template_Method/AI_Game/code/OrcsAI";
import {MonstersAI} from "src/Basic_Patterns/Behavioural_Patterns/Template_Method/AI_Game/code/MonstersAI";
import {GameAI} from "src/Basic_Patterns/Behavioural_Patterns/Template_Method/AI_Game/code/GameAI";

const orcsAI: GameAI = new OrcsAI();
orcsAI.takeTurn();

const monstersAI: GameAI = new MonstersAI();
monstersAI.takeTurn();
