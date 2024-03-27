import { leftContainer, mainNav } from "./utils";

import allIcon from './icons/all-inclusive-box-outline.svg';
import todayIcon from './icons/calendar-today.svg';
import sevenIcon from './icons/numeric-7-box-multiple-outline.svg';
import starIcon from './icons/star.svg';

export const createTaskFilter = () => {
    
    const tasksFilter = document.createElement('ul');
    tasksFilter.setAttribute('id', 'task-filter');
    
    //All tasks elements
    const liAllTasks = document.createElement('li');
    liAllTasks.classList.add('task-filter');
    liAllTasks.setAttribute('id', 'all-tasks');
    
    const txtAllTasks = document.createElement('div');
    txtAllTasks.textContent = 'All Tasks';
    txtAllTasks.classList.add('filters-text')

    const iconAll = new Image();
    iconAll.src = allIcon;
    iconAll.classList.add('icons');

    liAllTasks.append(iconAll, txtAllTasks);

    //Today elements
    const liTodayTasks = document.createElement('li');
    liTodayTasks.classList.add('task-filter');
    liTodayTasks.setAttribute('id', 'today-tasks');
    
    const txtTodayTasks = document.createElement('div');
    txtTodayTasks.textContent = 'Today';
    txtTodayTasks.classList.add('filters-text')

    const iconToday = new Image();
    iconToday.src = todayIcon;
    iconToday.classList.add('icons');

    liTodayTasks.append(iconToday, txtTodayTasks);


    //Next 7 days elements
    const liNxtSevenDays = document.createElement('li');
    liNxtSevenDays.classList.add('task-filter');
    liNxtSevenDays.setAttribute('id', 'next7days-tasks');
    
    const txtNxtSeven = document.createElement('div');
    txtNxtSeven.textContent = 'Next 7 Days';
    txtNxtSeven.classList.add('filters-text')

    const iconNextSeven = new Image();
    iconNextSeven.src = sevenIcon;
    iconNextSeven.classList.add('icons');

    liNxtSevenDays.append(iconNextSeven, txtNxtSeven);

    //Important elements
    const liImportantTasks = document.createElement('li');
    
    liImportantTasks.classList.add('task-filter');
    liImportantTasks.setAttribute('id', 'important-tasks');
    
    const txtImportant = document.createElement('div');
    txtImportant.textContent = 'Important';
    txtImportant.classList.add('filters-text')

    const iconImportant = new Image();
    iconImportant.src = starIcon;
    iconImportant.classList.add('icons');

    liImportantTasks.append(iconImportant, txtImportant);


    //Append nodes
    leftContainer.appendChild(mainNav);
    mainNav.appendChild(tasksFilter);
    tasksFilter.append(liAllTasks, liTodayTasks, liNxtSevenDays, liImportantTasks);
}