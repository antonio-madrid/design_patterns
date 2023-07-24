import {ThirdPartyYoutubeLib} from "../interfaces/ThirdPartyYoutubeLib";

/** Class used in Client code which uses the Remote Service through the Proxy */
class YoutubeManager {
    private service!: ThirdPartyYoutubeLib;

    public constructor(service: ThirdPartyYoutubeLib) {
        this.service = service;
    }

    public renderVideo(id: string): void {
        const info: string = this.service.getVideoInfo(id);
        console.log(`Render the video page with info: ${info}`);
    }

    public renderListPanel(): void {
        const list: string = this.service.listVideos();
        console.log(`Render the list of video thumbnails with info ${list}`);
    }

    public  reactOnUserInput(): void {
        this.renderVideo('1');
        this.renderListPanel();
    }

}

export { YoutubeManager };