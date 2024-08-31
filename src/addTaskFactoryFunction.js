export const createTask = (taskTitle, taskDescription, taskDuetDate, project, important) => {
    const getTaskTitle = () => taskTitle;
    const getTaskDescription = () => taskDescription;
    const getTaskDueDate = () => taskDuetDate;
    const getProject = () => project;

return { getTaskTitle, getTaskDescription, getTaskDueDate, getProject }
}