import { createTask } from "./addTaskFactoryFunction";
import { allTasks } from "./data";
import filledStar from './icons/important-star.svg';
import star from './icons/star.svg';

export const toggleImportant = (e) => {    
    
    if (e.target && e.target.matches('.task-star, .task-star-important')) {
        const liTaskClicked = e.target.closest('li');

        console.log('Clicked element: ', e.target);
        console.log('Clicked task li: ', liTaskClicked);

        if (liTaskClicked) {
            var taskClicked = liTaskClicked.dataset.taskTitle; 
        }

        const clickedStar = e.target;
        const previousElement = clickedStar.previousElementSibling;
        clickedStar.remove()

        console.log('Task to toggle importance', taskClicked);

        //Retrieve localStorage allTasks
        let storedAllTasks = JSON.parse(localStorage.getItem('allTasks')) || {};
        let updatedTask = storedAllTasks[taskClicked];
        storedAllTasks[taskClicked] = createTask(
            updatedTask.title,
            updatedTask.uniqueTitle,
            updatedTask.notes,
            updatedTask.complete,
            updatedTask.dueDate,
            updatedTask.taskProject,
            updatedTask.isImportant
        );
        updatedTask = storedAllTasks[taskClicked];

        if (allTasks[taskClicked].getImportant()) {
            allTasks[taskClicked].setImportant(false);
            updatedTask.setImportant(false);

            const starOutline = new Image();
            starOutline.src = star;
            starOutline.classList.add('icons', 'task-star');
            previousElement.insertAdjacentElement('afterend', starOutline);
            
            console.log('Task Important:', allTasks[taskClicked].getImportant())
            
        } else {
            allTasks[taskClicked].setImportant(true);
            updatedTask.setImportant(true);
            
            const starImportant = new Image();
            starImportant.src = filledStar;
            starImportant.classList.add('icons', 'task-star-important');
            previousElement.insertAdjacentElement('afterend', starImportant);

            console.log('Task Important:', allTasks[taskClicked].getImportant())
        }

        localStorage.setItem('allTasks', JSON.stringify(storedAllTasks));
    }
}