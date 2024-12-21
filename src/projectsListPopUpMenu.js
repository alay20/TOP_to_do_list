export const displayProjPopUpMenu = (e) => {
    if (e.target.classList.contains('popup-menu-ul') || e.target.classList.contains('popup-menu-edit') || e.target.classList.contains('popup-menu-delete')) {
        e.stopPropagation();  
    } else {
    const liProjectClicked = e.target.closest('li');
    console.log('Project of menu icon clicked:', liProjectClicked)
    
    //Create elements for popup menu
    const popUpMenuCont = document.createElement('div');
    popUpMenuCont.classList.add('project-popup-menu');
    
    const popUpMenuUl = document.createElement('ul');
    popUpMenuUl.classList.add('popup-menu-ul');
    
    const popUpMenuEdit = document.createElement('li');
    popUpMenuEdit.textContent = 'Edit';
    popUpMenuEdit.classList.add('popup-menu-edit');

    const popUpMenuDelete = document.createElement('li');
    popUpMenuDelete.textContent = 'Delete';
    popUpMenuDelete.classList.add('popup-menu-delete');

    if (e.target && e.target.matches('.project-menu')) {
        if(document.querySelector('.project-popup-menu') === null) {
            //Append elements
            popUpMenuCont.append(popUpMenuUl);
            popUpMenuUl.append(popUpMenuEdit, popUpMenuDelete);
            liProjectClicked.append(popUpMenuCont);
        } else {
            const existingPopup = document.querySelector('.project-popup-menu');
            const existingPopupLi = existingPopup.closest('li');
            if (liProjectClicked.dataset.projectTitle !== existingPopupLi.dataset.projectTitle){
                popUpMenuCont.append(popUpMenuUl);
                popUpMenuUl.append(popUpMenuEdit, popUpMenuDelete);
                liProjectClicked.append(popUpMenuCont);
            }
            existingPopup.remove();
        }
    };
}};