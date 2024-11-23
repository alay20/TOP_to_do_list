import { openAddTaskBtnCont, rightContainer } from "./utils";

export const displayAddTaskElements = (e) => {
    if (e.target.classList.contains('icons') && e.target.classList.contains('project-menu')
        || e.target.classList.contains('popup-menu-ul') 
        || e.target.classList.contains('popup-menu-edit') 
        || e.target.classList.contains('popup-menu-delete')) {
    e.stopPropagation();
    } else {
    rightContainer.appendChild(openAddTaskBtnCont);
    };
};