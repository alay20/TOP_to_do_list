import { allTasks } from "./data";
import filledStar from './icons/important-star.svg';
import star from './icons/star.svg';

export const toggleImportant = (e) => {    
    
    if (e.target && e.target.matches('.task-star, .task-star-important')) {
        const liTaskClicked = e.target.closest('li');

        console.log('Clicked element: ', e.target);
        console.log('Clicked task li: ', liTaskClicked);

        console.log('SVG:', filledStar);

        if (liTaskClicked) {
            var taskClicked = liTaskClicked.dataset.taskTitle; 
        }

        const clickedStar = e.target;
        const previousElement = clickedStar.previousElementSibling;
        clickedStar.remove()

        console.log('Task to toggle importance', taskClicked);

        if (allTasks[taskClicked].getImportant()) {
            allTasks[taskClicked].setImportant(false);

            const starOutline = new Image();
            starOutline.src = star;
            starOutline.classList.add('icons', 'task-star');
            previousElement.insertAdjacentElement('afterend', starOutline);
            
            console.log('Task Important:', allTasks[taskClicked].getImportant())
            
        } else {
            allTasks[taskClicked].setImportant(true);
            
            const starImportant = new Image();
            starImportant.src = filledStar;
            starImportant.classList.add('icons', 'task-star-important');
            previousElement.insertAdjacentElement('afterend', starImportant);

            console.log('Task Important:', allTasks[taskClicked].getImportant())
        }

    }
}

//Insert star with inline svg next to the original clicked star
            // clickedStar.insertAdjacentHTML('afterend', star);
            // const blankStar = clickedStar.nextElementSibling;
            // blankStar.classList.add('task-star');

            // clickedStar.remove();

            // console.log('Task Important:', allTasks[taskClicked].getImportant())


//Insert star with inline svg next to the original clicked star
// clickedStar.insertAdjacentHTML('afterend', filledStar);

// const importantStar = clickedStar.nextElementSibling;
// importantStar.classList.add('task-star-important');

// clickedStar.remove();