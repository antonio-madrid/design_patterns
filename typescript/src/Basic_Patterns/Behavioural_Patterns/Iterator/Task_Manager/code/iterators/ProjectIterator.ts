import {Iterator} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Task_Manager/code/iterators/Iterator";
import {Project} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Task_Manager/code/Project";

/** Concrete Iterator */
class ProjectIterator implements Iterator<Project> {
    private index = 0;

    constructor(private collection: Project[]) {}

    next(): Project | null {
        if (!this.hasNext()) {
            return null;
        }

        return this.collection[this.index++];
    }

    hasNext(): boolean {
        return this.index < this.collection.length;
    }
}

export { ProjectIterator };