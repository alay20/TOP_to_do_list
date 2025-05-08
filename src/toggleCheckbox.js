import { createTask } from "./addTaskFactoryFunction";
import { allTasks } from "./data";
import emptyBox from './icons/checkbox-blank-outline.svg';
import checkedBox from './icons/checkbox-outline.svg';

export const toggleCheckBox = (e) => {
    
    if (e.target && e.target.matches('.task-checkbox')) {
        const liTaskClicked = e.target.closest('li');
            console.log('Clicked element: ', e.target);
            console.log('Clicked task li: ', liTaskClicked);

            if (liTaskClicked) {
                var taskClicked = liTaskClicked.dataset.taskTitle;
            } 
            
            console.log('Task to toggle complete: ', taskClicked);

            //Retrieve local storage
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
        

            if (allTasks[taskClicked].getTaskComplete()) {
                allTasks[taskClicked].setTaskComplete(false);    
                updatedTask.setTaskComplete(false);
                
                const incompleteIcon = new Image();
                incompleteIcon.src = emptyBox;
                incompleteIcon.classList.add('icons', 'task-checkbox');

                const clickedTaskText = e.target.parentElement.querySelector('.task-text-completed');
                clickedTaskText.classList.remove('task-text-completed');
                clickedTaskText.classList.add('task-text');

                const clickedTaskNotes = e.target.parentElement.querySelector('.task-notes-completed');
                clickedTaskNotes.classList.remove('task-notes-completed');
                clickedTaskNotes.classList.add('task-notes');
                
                const clickedCheckBox = e.target;
                clickedCheckBox.remove();
                
                liTaskClicked.prepend(incompleteIcon);    
            } else {
                allTasks[taskClicked].setTaskComplete(true);
                updatedTask.setTaskComplete(true);
                
                const completeIcon = new Image();
                completeIcon.src = checkedBox;
                completeIcon.classList.add('icons', 'task-checkbox');
                
                const clickedTaskText = e.target.parentElement.querySelector('.task-text');
                clickedTaskText.classList.add('task-text-completed');

                const clickedTaskNotes = e.target.parentElement.querySelector('.task-notes');
                clickedTaskNotes.classList.add('task-notes-completed');
                
                const clickedCheckBox = e.target;
                clickedCheckBox.remove();
                
                liTaskClicked.prepend(completeIcon);    
            }

            console.log('Task complete?', allTasks[taskClicked].getTaskComplete());

            localStorage.setItem('allTasks', JSON.stringify(storedAllTasks));
    }
}
