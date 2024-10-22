export const keyPressEnterEventListener = (e, buttonElement) => {
    if (e.keyCode === 13) {
        buttonElement.click();
    }
}