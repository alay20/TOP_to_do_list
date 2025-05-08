export const createTask = (taskTitleAsEntered, taskUniqueTitle, taskNotes, taskComplete = false, taskDuetDate, project, important = false) => {
    let title = taskTitleAsEntered;
    let uniqueTitle = taskUniqueTitle;
    let notes = taskNotes;
    let complete = taskComplete;
    let dueDate = taskDuetDate;
    let taskProject = project;
    let isImportant = important;

    const getTaskTitleAsEntered = () => title;
    const getTaskUniqueTitle = () => uniqueTitle; 
    const getTaskNotes = () => notes;
    const getTaskComplete = () => complete; 
    const getTaskDueDate = () => dueDate;
    const getProject = () => taskProject;
    const getImportant = () => isImportant;

    const setTaskTitle = (newTitle) => title = newTitle;
    const setTaskUniqueTitle = (newUniqueTitle) => uniqueTitle = newUniqueTitle;
    const setTaskNotes = (newNotes) => notes = newNotes;
    const setTaskComplete = (newComplete) => complete = newComplete;
    const setTaskDueDate = (newDueDate) => dueDate = newDueDate;
    const setProject = (newProject) => taskProject = newProject;
    const setImportant = (newImportant) => isImportant = newImportant; 

    const toJSON = () => ({
        title,
        uniqueTitle,
        notes,
        complete,
        dueDate,
        taskProject,
        isImportant
    });


return { getTaskTitleAsEntered, getTaskUniqueTitle, getTaskNotes, getTaskComplete, getTaskDueDate, getProject, getImportant, 
        setTaskTitle, setTaskUniqueTitle,setTaskNotes, setTaskComplete, setTaskDueDate, setProject, setImportant, toJSON
};
};