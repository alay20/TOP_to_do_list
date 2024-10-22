export const body = document.body; 
export const header = document.querySelector('#header-container');
export const menuBtn = document.createElement('button');
export const mainContainer = document.querySelector('#main-container');

export const leftContainer = document.querySelector('#left-container');
export const rightContainer = document.querySelector('#right-container');


//Elements in left main container
export const mainNav = document.createElement('nav');

export const projectsList = document.createElement('ul');
projectsList.classList.add('projects-list');

export const addProjectsDiv = document.createElement('div');

export const addNewProjectCont = document.createElement('div');
addNewProjectCont.classList.add('add-new-project-form-cont');



//Elements in container for adding new project 
    export const enterProjectTitleLabel = document.createElement('label');
    enterProjectTitleLabel.setAttribute('for', 'projectTitle');
    enterProjectTitleLabel.classList.add('enter-project-label');

    export const enterProjectTitleInput = document.createElement('input');
    enterProjectTitleInput.setAttribute('type', 'text');
    enterProjectTitleInput.setAttribute('id', 'projectTitle');
    enterProjectTitleInput.setAttribute('placeholder', 'Enter Project Title');
    enterProjectTitleInput.classList.add('enter-project-input');


    export const addProjectBtn = document.createElement('button');
    addProjectBtn.textContent = 'Add';
    addProjectBtn.classList.add('projects-buttons')
    addProjectBtn.classList.add('add-project-btn');

    export const cancelAddProjectBtn = document.createElement('button');
    cancelAddProjectBtn.textContent = 'Cancel';
    cancelAddProjectBtn.classList.add('projects-buttons');
    cancelAddProjectBtn.classList.add('cancel-add-btn');

    //Error message for same project name
    export const projectNameErrorMsg = document.createElement('div');
    projectNameErrorMsg.textContent = 'Sorry, the project name you entered is already in use. Please choose a different name to ensure it is unique.'
    projectNameErrorMsg.classList.add('error-message');

    //Variable to store last clicked project title
    export let lastClickedProject = null;
    export const setLastClickedProject = (projectName) => {
        lastClickedProject = projectName; 
    }

    
//Elements in main right container
    export const projectTitleCont = document.createElement('div');
    projectTitleCont.classList.add('project-title-cont')

    //Add Task button container
        export const openAddTaskBtnCont = document.createElement('div');
        openAddTaskBtnCont.classList.add('open-add-task-btn-cont');
        
        export const openAddTaskBtn = document.createElement('button')
        openAddTaskBtn.classList.add('add-task-btn');
        openAddTaskBtn.textContent = "Add Task";

        import addCircleIcon from './icons/plus-circle-outline.svg';
        const addTaskIcon = new Image();
        addTaskIcon.src = addCircleIcon;
        addTaskIcon.classList.add('icons');

        openAddTaskBtnCont.append(addTaskIcon, openAddTaskBtn);

    //Add Task input container
        export const addTaskInputCont = document.createElement('div');
        addTaskInputCont.classList.add('add-task-form-cont');
        
        //Task name
        export const enterTaskNameLabel = document.createElement('label');
        enterTaskNameLabel.setAttribute('for', 'taskName');
        enterTaskNameLabel.classList.add('enter-task-label');

        export const enterTaskNameInput = document.createElement('input');
        enterTaskNameInput.setAttribute('type', 'text');
        enterTaskNameInput.setAttribute('id', 'taskName');
        enterTaskNameInput.setAttribute('placeholder', 'New Task')
        enterTaskNameInput.classList.add('enter-task-input');

        //Task Notes
        export const enterTaskNotesLabel = document.createElement('label');
        enterTaskNotesLabel.setAttribute('for', 'taskNotes');
        enterTaskNotesLabel.classList.add('enter-notes-label');

        export const enterTaskNotesInput = document.createElement('textarea');
        enterTaskNotesInput.setAttribute('id', 'taskNotes');
        enterTaskNotesInput.setAttribute('placeholder', 'Task Notes')
        enterTaskNotesInput.classList.add('enter-notes-input');

        //Task Dates
        export const enterTaskDateLabel = document.createElement('label');
        enterTaskDateLabel.setAttribute('for', 'taskNotes');
        enterTaskDateLabel.classList.add('enter-notes-label');

        export const enterTaskDateInput = document.createElement('input');
        enterTaskDateInput.setAttribute('type', 'date');
        enterTaskDateInput.setAttribute('id', 'taskDate');
        enterTaskDateInput.classList.add('enter-date-input');

        //Task Add Button
        export const addTaskBtn = document.createElement('button');
        addTaskBtn.textContent = 'Add';
        addTaskBtn.classList.add('form-add-task-btn');
        addTaskBtn.classList.add('form-task-btns');
        
        //Task Cancel Button
        export const cancelAddTaskBtn = document.createElement('button');
        cancelAddTaskBtn.textContent = 'Cancel';
        cancelAddTaskBtn.classList.add('form-cancel-add-task-btn');
        cancelAddTaskBtn.classList.add('form-task-btns')
        
        //Append elements to container to add task
        addTaskInputCont.append(enterTaskNameLabel, enterTaskNameInput, enterTaskNotesLabel, enterTaskNotesInput, enterTaskDateLabel, enterTaskDateInput, addTaskBtn, cancelAddTaskBtn);

    //Elements for list of tasks added

        //Task list
        export const taskList = document.createElement('ul');
        taskList.classList.add('task-list');


        


        
