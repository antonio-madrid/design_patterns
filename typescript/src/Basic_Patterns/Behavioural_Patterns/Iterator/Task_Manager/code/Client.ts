import {
    ProjectCollection
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Task_Manager/code/collections/ProjectCollection";
import {Task} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Task_Manager/code/Task";
import {Project} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Task_Manager/code/Project";
import {TaskIterator} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Task_Manager/code/iterators/TaskIterator";

const projectCollection = new ProjectCollection();
projectCollection.addProject(new Project('Web Development', [
    new Task('Design the UI', false),
    new Task('Implement the backend', true)
]));

projectCollection.addProject(new Project('Marketing Campaign', [
    new Task('Prepare the ad materail', false),
    new Task('Set up social media ads', false)
]));

const projectIterator = projectCollection.createIterator();

while (projectIterator.hasNext()) {
    const project = projectIterator.next();
    console.log(`Project: ${project?.name}`);

    if (project) {
        const taskIterator = new TaskIterator(project);
        while (taskIterator.hasNext()) {
            const task = taskIterator.next();
            console.log(`Task: ${task?.title}, Completed: ${task?.completed}`);
        }
    }
    console.log('');
}