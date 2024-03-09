import { header, menuBtn, mainContainer, leftContainer, rightContainer, } from "./utils";
import { createTaskFilter } from "./taskFilter";
import { createProjects } from "./projectsList";

export const showMenu = () => {
    if (mainContainer.children.length === 2) {
        leftContainer.remove();
    } else if (mainContainer.children.length === 1) {
        mainContainer.insertBefore(leftContainer, rightContainer);
    }
}