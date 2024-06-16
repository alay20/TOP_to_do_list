import { addTaskInputCont, enterTaskDateInput, enterTaskNameInput, enterTaskNotesInput} from "./utils";

export const cancelAddTask = () => {
    addTaskInputCont.remove();
    enterTaskNameInput.value = "";
    enterTaskNotesInput.value = "";
    enterTaskDateInput.value = "";
}