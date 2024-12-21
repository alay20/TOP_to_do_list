export const removeProjPopupMenu = (e) => {
    const existingPopup = document.querySelector('.project-popup-menu');
    // const existingPopupDataset = e.target.closest('li').dataset.projectTitle;

    if (existingPopup && !e.target.classList.contains('project-menu')) {
        existingPopup.remove();
    };
};