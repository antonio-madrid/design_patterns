import {Task} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Task_Manager/code/Task";

/** Client class */
class Project {
    constructor(
        public name: string,
        private tasks: Task[]) {}

    getTasks(): Task[] {
        return this.tasks;
    }
}

export { Project };