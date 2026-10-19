/* Открывает модальное окно по кнопке «Сохранить на память» и закрывает его по кнопке «ОК». */

const saveButton = document.querySelector('.save-button');
const saveDialog = document.querySelector('.dialog');
const dialogCloseButton = saveDialog.querySelector('.dialog__button');

saveButton.addEventListener('click', () => saveDialog.showModal());
dialogCloseButton.addEventListener('click', () => saveDialog.close());
