import './style.css';
import { createHeader } from './header';
import { createTaskFilter } from './taskFilter';
import { createProjects } from './projectsList';
import { createTaskProjectDisplay } from './taskProjectDisplay';
import { menuBtn } from './utils';
import { showMenu } from './menuButton';

createHeader();
createTaskFilter();
createProjects();
createTaskProjectDisplay();

menuBtn.addEventListener('click', showMenu);
