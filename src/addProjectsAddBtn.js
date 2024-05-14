import { createProject } from "./addProjectFactoryFunction"
import { enterProjectNameInput } from "./utils"
import { allProjects } from "./data";

export const addProjectsToObj = () => {
    const newProjectName = enterProjectNameInput.value;
    enterProjectNameInput.value = '';

    const newProject = createProject(newProjectName);

    allProjects[newProjectName] = newProject;
}