export const createProject = (projectName) => {

    let project = projectName;  

    const getProjectName = () => project; 

    const setProjectName = (newProjectName) => project = newProjectName;

    return { getProjectName, setProjectName };
}