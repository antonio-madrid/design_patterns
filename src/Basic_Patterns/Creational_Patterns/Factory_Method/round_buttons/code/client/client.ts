import {UIFramework} from "../creators/UIFramework";
import {UIWithRoundButtons} from "../creators/UIWithRoundButtons";

/** Following the Lisk Substitution Principle, you can use a subclass as a parent class */
const ui: UIFramework = new UIWithRoundButtons();
ui.renderButton();