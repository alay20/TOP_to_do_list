export const body = document.body; 
export const header = document.querySelector('#header-container');
export const menuBtn = document.createElement('button');
export const mainContainer = document.querySelector('#main-container');
export const leftContainer = document.querySelector('#left-container');
export const rightContainer = document.querySelector('#right-container');
export const mainNav = document.createElement('nav');
export const projectsList = document.createElement('ul');

export const addProjectsLi = document.createElement('li');
export const addNewProjectCont = document.createElement('div');

//Elements in container for adding new project 
    export const enterProjectNameLabel = document.createElement('label');
    enterProjectNameLabel.setAttribute('for', 'projectName');
    enterProjectNameLabel.classList.add('enter-project-label');

    export const enterProjectNameInput = document.createElement('input');
    enterProjectNameInput.setAttribute('type', 'text');
    enterProjectNameInput.setAttribute('id', 'projectName');
    enterProjectNameInput.setAttribute('placeholder', 'Enter Project Name');
    enterProjectNameInput.classList.add('enter-project-input');

    export const cancelAddProjectBtn = document.createElement('button');

//Elements in new li element for new project
    export const newProjectLi = document.createElement('li');
    export const newProjectNameText = document.createElement('div');
