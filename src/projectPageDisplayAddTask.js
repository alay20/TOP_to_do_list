import { addTaskCont, rightContainer } from "./utils";
import addCircleIcon from './icons/plus-circle-outline.svg';

export const displayAddTaskElements = () => {
    const addTaskIcon = new Image();
    addTaskIcon.src = addCircleIcon;
    addTaskIcon.classList.add('icons');
    
    addTaskCont.textContent = 'Add Task';
    rightContainer.appendChild(addTaskCont);
}