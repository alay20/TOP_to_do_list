export const createTask = (taskTitle, taskNotes, taskComplete = false, taskDuetDate, project, important = false) => {
    let title = taskTitle;
    let notes = taskNotes;
    let complete = taskComplete;
    let dueDate = taskDuetDate;
    let taskProject = project;
    let isImportant = important;

    const getTaskTitle = () => title;
    const getTaskNotes = () => notes;
    const getTaskComplete = () => complete; 
    const getTaskDueDate = () => dueDate;
    const getProject = () => taskProject;
    const getImportant = () => isImportant;

    const setTaskTitle = (newTitle) => title = newTitle;
    const setTaskNotes = (newNotes) => notes = newNotes;
    const setTaskComplete = (newComplete) => complete = newComplete;
    const setTaskDueDate = (newDueDate) => dueDate = newDueDate;
    const setProject = (newProject) => taskProject = newProject;
    const setImportant = (newImportant) => isImportant = newImportant; 


return { getTaskTitle, getTaskNotes, getTaskComplete, getTaskDueDate, getProject, getImportant, 
        setTaskTitle, setTaskNotes, setTaskComplete, setTaskDueDate, setProject, setImportant
}
}