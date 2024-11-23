import { mainContainer, leftContainer, rightContainer, } from "./utils";


export const showMenu = () => {
    if (mainContainer.children.length === 2) {
        leftContainer.remove();
        mainContainer.style.display = "block";
    } else if (mainContainer.children.length === 1) {
        mainContainer.style.display = "grid";
        mainContainer.insertBefore(leftContainer, rightContainer);
    }
}