import { createProject } from "./addProjectFactoryFunction"
import { enterProjectTitleInput } from "./utils"
import { allProjects } from "./data";

export const addProjectsToObj = () => {
    const newProjectName = enterProjectTitleInput.value;
    enterProjectTitleInput.value = '';

    const newProject = createProject(newProjectName);

    allProjects[newProjectName] = newProject;
}