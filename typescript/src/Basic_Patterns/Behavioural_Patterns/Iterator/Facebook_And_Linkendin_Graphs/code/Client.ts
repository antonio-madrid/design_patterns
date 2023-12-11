import {Profile} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Facebook_And_Linkendin_Graphs/code/Profile";
import {
    LinkedIn
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Facebook_And_Linkendin_Graphs/code/collections/LinkedIn";
import {
    Facebook
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Facebook_And_Linkendin_Graphs/code/collections/Facebook";
import {
    SocialSpammer
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Facebook_And_Linkendin_Graphs/code/SocialSpammer";

function createTestProfiles(): Profile[] {
    return [
        new Profile('anna.smith@bing.com', 'Anna Smith', 'friends:mad_max@ya.com', 'friends:catwoman@yahoo.com', 'coworkers:sam@amazon.com'),
        new Profile('mad_max@ya.com', 'Maximilian', 'friends:anna.smith@bing.com', 'coworkers:sam@amazon.com'),
        new Profile('bill@microsoft.eu', 'Billie', 'coworkers:avanger@ukr.net'),
        new Profile('avanger@ukr.net', 'John Day', 'coworkers:bill@microsoft.eu'),
        new Profile('sam@amazon.com', 'Sam Kitting', 'coworkers:anna.smith@bing.com', 'coworkers:mad_max@ya.com', 'friends:catwoman@yahoo.com'),
        new Profile('catwoman@yahoo.com', 'Liza', 'friends:anna.smith@bing.com', 'friends:sam@amazon.com')
    ]
}

let network;
const profiles = createTestProfiles();
network = new Facebook(profiles);


let spammer = new SocialSpammer(network);

spammer.sendSpamToFriends('anna.smith@bing.com', 'Hey! This is Anna\'s friend Josh. Can you do me a favor and like this post [link]?');
spammer.sendSpamToCoworkers('anna.smith@bing.com', 'Hey! This is Anna\'s boss Jason. Anna told me you would be interested in [link].');

console.log('Spam sent correctly.');

network = new LinkedIn(profiles);
spammer = new SocialSpammer(network);

spammer.sendSpamToFriends('bill@microsoft.eu', 'Hey! This is Bill\'s friend Jane. Can you do me a favor and like this post [link]?');
spammer.sendSpamToCoworkers('bill@microsoft.eu', 'Hey! This is Bill\'s boss Jane. Bill told me you would be interested in [link].');

console.log('Spam sent correctly.');
