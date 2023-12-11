import {Collection} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Task_Manager/code/collections/Collection";
import {Project} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Task_Manager/code/Project";
import {Iterator} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Task_Manager/code/iterators/Iterator";
import {
    ProjectIterator
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Task_Manager/code/iterators/ProjectIterator";

/** Concrete Collection */
class ProjectCollection implements Collection<Project> {
    private projects: Project[] = [];

    addProject(project: Project): void {
        this.projects.push(project);
    }

    createIterator(): Iterator<Project> {
        return new ProjectIterator(this.projects);
    }
}

export { ProjectCollection };