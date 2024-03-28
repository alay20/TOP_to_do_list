import { mainContainer, leftContainer, rightContainer, } from "./utils";


export const showMenu = () => {
    if (mainContainer.children.length === 2) {
        leftContainer.remove();
    } else if (mainContainer.children.length === 1) {
        mainContainer.insertBefore(leftContainer, rightContainer);
    }
}