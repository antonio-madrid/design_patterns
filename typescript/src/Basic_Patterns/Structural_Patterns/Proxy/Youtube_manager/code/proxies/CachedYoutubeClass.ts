import {ThirdPartyYoutubeLib} from "src/Basic_Patterns/Structural_Patterns/Proxy/Youtube_manager/code/interfaces/ThirdPartyYoutubeLib";

/** Caching Proxy of a Remote Service */
class CachedYoutubeClass implements ThirdPartyYoutubeLib {
    private service!: ThirdPartyYoutubeLib;
    private listCache: string | null = null;
    private videoCache: string | null = null;

    public constructor(service: ThirdPartyYoutubeLib) {
        this.service = service;
    }

    public listVideos(): string {
        if (!this.listCache) {
            this.listCache = this.service.listVideos();
        }
        return this.listCache;
    }

    public getVideoInfo(id: string): string {
        if (!this.videoCache) {
            this.videoCache = this.service.getVideoInfo(id);
        }
        return this.videoCache;
    }

    public downloadVideo(id: string): string {
        return this.service.downloadVideo(id);
    }

}

export { CachedYoutubeClass };