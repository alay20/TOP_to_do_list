export const removeProjPopupMenu = (e) => {
    const existingPopup = document.querySelector('.project-popup-menu');
    if (existingPopup && !e.target.classList.contains('project-menu')) {
        existingPopup.remove();
    };
};