import { addTaskInputCont, enterTaskDateInput, enterTaskNameInput, enterTaskNotesInput, rightContainer, openAddTaskBtnCont} from "./utils";

export const cancelAddTask = () => {
    addTaskInputCont.remove();
    enterTaskNameInput.value = "";
    enterTaskNotesInput.value = "";
    enterTaskDateInput.value = "";
    rightContainer.appendChild(openAddTaskBtnCont);
}