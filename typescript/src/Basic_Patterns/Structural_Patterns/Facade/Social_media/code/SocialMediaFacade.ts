import {PhotoManager} from "src/Basic_Patterns/Structural_Patterns/Facade/Social_media/code/subsystem/PhotoManager";
import {MessagingSystem} from "src/Basic_Patterns/Structural_Patterns/Facade/Social_media/code/subsystem/MessagingSystem";
import {FriendSystem} from "src/Basic_Patterns/Structural_Patterns/Facade/Social_media/code/subsystem/FriendSystem";

class SocialMediaFacade {
    private photoManager: PhotoManager;
    private messagingSystem: MessagingSystem;
    private friendSystem: FriendSystem;

    constructor() {
        this.photoManager = new PhotoManager();
        this.messagingSystem = new MessagingSystem();
        this.friendSystem = new FriendSystem();
    }

    public shareLifeEvent(photo: string, message: string, friends: string[]): void {
        this.photoManager.uploadPhoto(photo);

        this.messagingSystem.sendMessage(message, "My Story");
        friends.forEach((friend) => {
            this.messagingSystem.sendMessage(message, friend);
            this.friendSystem.addFriend(friend);
        });

        console.log(`Life event shared with ${friends.length} friends`);
    }
}

export { SocialMediaFacade };