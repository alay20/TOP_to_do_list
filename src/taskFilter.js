import { leftContainer, liAllTasks, liImportantTasks, liNxtSevenDays, liTodayTasks, mainNav, tasksFilter, txtAllTasks, txtImportant, txtNxtSeven, txtTodayTasks } from "./utils";

import allIcon from './icons/all-inclusive-box-outline.svg';
import todayIcon from './icons/calendar-today.svg';
import sevenIcon from './icons/numeric-7-box-multiple-outline.svg';
import starIcon from './icons/star.svg';

export const createTaskFilter = () => {
    
    //All tasks elements
    const iconAll = new Image();
    iconAll.src = allIcon;
    iconAll.classList.add('icons');

    liAllTasks.append(iconAll, txtAllTasks);

    //Today elements
    const iconToday = new Image();
    iconToday.src = todayIcon;
    iconToday.classList.add('icons');

    liTodayTasks.append(iconToday, txtTodayTasks);


    // //Next 7 days elements
    const iconNextSeven = new Image();
    iconNextSeven.src = sevenIcon;
    iconNextSeven.classList.add('icons');

    liNxtSevenDays.append(iconNextSeven, txtNxtSeven);

    //Important elements
    const iconImportant = new Image();
    iconImportant.src = starIcon;
    iconImportant.classList.add('icons');

    liImportantTasks.append(iconImportant, txtImportant);


    //Append nodes
    leftContainer.appendChild(mainNav);
    mainNav.appendChild(tasksFilter);
    tasksFilter.append(liAllTasks, liTodayTasks, liNxtSevenDays, liImportantTasks);
}