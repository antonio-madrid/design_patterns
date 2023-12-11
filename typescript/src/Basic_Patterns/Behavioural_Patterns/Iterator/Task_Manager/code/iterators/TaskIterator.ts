import {Iterator} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Task_Manager/code/iterators/Iterator";
import {Task} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Task_Manager/code/Task";
import {Project} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Task_Manager/code/Project";

/** Concrete Iterator */
class TaskIterator implements Iterator<Task> {
    private position = 0;

    constructor(private project: Project) {}

    next(): Task | null {
        if (!this.hasNext()) {
            return null;
        }

        return this.project.getTasks()[this.position++];
    }

    hasNext(): boolean {
        return this.position < this.project.getTasks().length;
    }
}

export { TaskIterator };