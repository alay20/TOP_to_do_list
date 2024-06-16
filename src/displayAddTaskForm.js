import { rightContainer, addTaskInputCont, openAddTaskBtnCont, enterTaskNameInput } from "./utils";

export const displayAddTaskForm = () => {
    rightContainer.insertBefore(addTaskInputCont, openAddTaskBtnCont);
    enterTaskNameInput.focus();
}