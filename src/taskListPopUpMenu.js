export const displayTaskPopUpMenu = (e) => {
    if (e.target.matches('.icons.task-menu')) {

        const liTaskClicked = e.target.closest('li');

        const taskMenuIcon = document.querySelector('.icons.task-menu');

        //Create elements for popup menu
        const popUpMenuCont = document.createElement('div');
        popUpMenuCont.classList.add('task-popup-menu');

        const popUpMenuUl = document.createElement('ul');
        popUpMenuUl.classList.add('popup-menu-ul');
        
        const popUpMenuEdit = document.createElement('li');
        popUpMenuEdit.textContent = 'Edit';
        popUpMenuEdit.classList.add('popup-menu-edit', 'task');

        const popUpMenuDelete = document.createElement('li');
        popUpMenuDelete.textContent = 'Delete';
        popUpMenuDelete.classList.add('popup-menu-delete', 'task');

        if (e.target && e.target.matches('.task-menu')) {
            if(document.querySelector('.task-popup-menu') === null) {
                //Append elements
                popUpMenuCont.append(popUpMenuUl);
                popUpMenuUl.append(popUpMenuEdit, popUpMenuDelete);
                liTaskClicked.append(popUpMenuCont);
            } else {
                const existingPopup = document.querySelector('.task-popup-menu');
                const existingPopupLi = existingPopup.closest('li');
                if (liTaskClicked.dataset.taskTitle !== existingPopupLi.dataset.taskTitle){
                    popUpMenuCont.append(popUpMenuUl);
                    popUpMenuUl.append(popUpMenuEdit, popUpMenuDelete);
                    liTaskClicked.append(popUpMenuCont);
                }
                existingPopup.remove();
            }
    };
    }}