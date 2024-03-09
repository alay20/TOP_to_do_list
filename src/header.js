import { header, menuBtn } from './utils';
import listIcon from './icons/format-list-checks.svg';
import menuIcon from './icons/menu.svg';


export const createHeader = () => {
    
    //Menu button
        //Create elements
        menuBtn.classList.add('menu-btn');

        const menuBtnIcon = new Image ();
        menuBtnIcon.src = menuIcon;
        menuBtnIcon.classList.add('menu-btn-icon');
        menuBtn.appendChild(menuBtnIcon);


    //Page title
        //Create elements
        const logoContainer = document.createElement('div');
        logoContainer.classList.add('logo-cont');
        
        const pageLogoTxt = document.createElement('h1');
        pageLogoTxt.textContent = 'Todo List';
        
        const logoIcon = new Image ();
        logoIcon.src = listIcon;

    //Light-dark mode button
        const lightDarkBtn = document.createElement('button');
        lightDarkBtn.classList.add('light-dark-btn');
        lightDarkBtn.textContent = 'Light-Dark Mode';
        

    //Append elements
        header.appendChild(menuBtn);
        header.appendChild(logoContainer);
        header.appendChild(lightDarkBtn);
        logoContainer.appendChild(logoIcon);
        logoContainer.appendChild(pageLogoTxt);
}