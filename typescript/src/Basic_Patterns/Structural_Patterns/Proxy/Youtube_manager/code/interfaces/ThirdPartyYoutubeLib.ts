/** Remote Service Interface */
interface ThirdPartyYoutubeLib {
    listVideos(): string;
    getVideoInfo(id: string): string;
    downloadVideo(id: string): string;
}

export { ThirdPartyYoutubeLib };