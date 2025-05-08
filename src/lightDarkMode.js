import { body, header, leftContainer, mainContainer, rightContainer } from "./utils"

export const toggleLightDarkMode = () => {

    if (document.querySelector('.dark')) {
        header.classList.remove('dark');
        leftContainer.classList.remove('dark');
        rightContainer.classList.remove('dark');
        mainContainer.classList.remove('dark');
        body.classList.remove('dark');
    } else {
        header.classList.add('dark');
        leftContainer.classList.add('dark');
        rightContainer.classList.add('dark');
        mainContainer.classList.add('dark');
        body.classList.add('dark');
    }
}