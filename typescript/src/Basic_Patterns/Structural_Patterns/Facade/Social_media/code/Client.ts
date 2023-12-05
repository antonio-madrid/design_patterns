import {SocialMediaFacade} from "src/Basic_Patterns/Structural_Patterns/Facade/Social_media/code/SocialMediaFacade";

const socialMedia = new SocialMediaFacade();
socialMedia.shareLifeEvent("holiday.jpg", "Have fun in the beach!", ["John", "Jane", "Jack"]);
