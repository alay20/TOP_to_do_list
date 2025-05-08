import { createProject } from "./addProjectFactoryFunction"
import { enterProjectTitleInput } from "./utils"
import { allProjects } from "./data";

export const addProjectsToObj = () => {
    const newProjectName = enterProjectTitleInput.value;
    enterProjectTitleInput.value = '';

    const newProject = createProject(newProjectName);

    allProjects[newProjectName] = newProject;

    let storedProjects = JSON.parse(localStorage.getItem('allProjects')) || {};
    storedProjects[newProjectName] = newProject;
    localStorage.setItem('allProjects', JSON.stringify(storedProjects));    
};