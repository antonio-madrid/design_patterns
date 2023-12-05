import {UIFramework} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/round_buttons/code/creators/UIFramework";
import {UIWithRoundButtons} from "src/Basic_Patterns/Creational_Patterns/Factory_Method/round_buttons/code/creators/UIWithRoundButtons";

/** Following the Lisk Substitution Principle, you can use a subclass as a parent class */
const ui: UIFramework = new UIWithRoundButtons();
ui.renderButton();