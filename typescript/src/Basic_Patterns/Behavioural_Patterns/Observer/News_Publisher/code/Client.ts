import {NewsAgency} from "src/Basic_Patterns/Behavioural_Patterns/Observer/News_Publisher/code/subjects/NewsAgency";
import {Person} from "src/Basic_Patterns/Behavioural_Patterns/Observer/News_Publisher/code/observers/Person";

const newsAgency = new NewsAgency();
const alice = new Person("Alice");
const bob = new Person("Bob");

newsAgency.addSubscriber(alice);
newsAgency.addSubscriber(bob);

newsAgency.publishNews("The weather is hot today.");
newsAgency.publishNews("TypeScript 4.5 Released!");
