import {ThirdPartyYoutubeClass} from "../services/ThirdPartyYoutubeClass";
import {CachedYoutubeClass} from "../proxies/CachedYoutubeClass";
import {YoutubeManager} from "./YoutubeManager";
import {ThirdPartyYoutubeLib} from "../interfaces/ThirdPartyYoutubeLib";

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