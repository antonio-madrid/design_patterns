import {ThirdPartyYoutubeClass} from "src/Basic_Patterns/Structural_Patterns/Proxy/Youtube_manager/code/services/ThirdPartyYoutubeClass";
import {CachedYoutubeClass} from "src/Basic_Patterns/Structural_Patterns/Proxy/Youtube_manager/code/proxies/CachedYoutubeClass";
import {YoutubeManager} from "src/Basic_Patterns/Structural_Patterns/Proxy/Youtube_manager/code/client/YoutubeManager";
import {ThirdPartyYoutubeLib} from "src/Basic_Patterns/Structural_Patterns/Proxy/Youtube_manager/code/interfaces/ThirdPartyYoutubeLib";

/** Client's main code */
class Application {
    public init(): void {
        const youtubeService: ThirdPartyYoutubeLib = new ThirdPartyYoutubeClass();
        const youtubeProxy: ThirdPartyYoutubeLib = new CachedYoutubeClass(youtubeService);
        const manager: YoutubeManager = new YoutubeManager(youtubeProxy);
        manager.reactOnUserInput();
    }
}

const app = new Application();
app.init();