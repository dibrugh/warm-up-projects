/// Алгоритм:
// 1. Создаём кнопку
// 2. Отслеживаем клики
// 3. Затемняем экран
// 4. Поверх темного экрана рисуем модальное окно (например, блок белого цвета)
// 5. В модальном окне отрисовываем кнопки
// 6. Вешаем клик на кнопки в модальном окне
// 7. Отслеживаем клик на затемненную область 

const openModalButton = document.getElementById('open_modal');

openModalButton.addEventListener('click', () => {
    // Создаём обертку
    const wrapper = document.createElement('div');
    wrapper.className = 'modalWrapper';
    document.body.appendChild(wrapper);


    // Затемняем экран
    const backdrop = document.createElement('div');
    backdrop.className = 'backdrop';
    wrapper.appendChild(backdrop);
    // Обрабатываем клик на затемненную область
    backdrop.addEventListener('click', () => {
        closeModal()
    });

    // Отрисовываем модалку
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal';

    const cross = createModalButton('modalCross', 'X', closeModal);
    const buttonOk = createModalButton('modalOkButton', 'OK', closeModal);
    const buttonCancel = createModalButton('modalCancelButton', 'Cancel', closeModal);

    modalContainer.appendChild(cross);
    modalContainer.appendChild(buttonOk);
    modalContainer.appendChild(buttonCancel);

    wrapper.appendChild(modalContainer);
})

// Т.к закрываем окно и при нажатии на кнопки, и на затемненную область, избегаем дублирование кода созданием функции
function closeModal () {
    const modal = document.querySelector('.modalWrapper');
    if (!modal) {
        console.error('Модалки нет');
        return;
    }

    modal.remove();
}

// Чтобы не дублировать код при создании кнопок
function createModalButton(className, text, func) {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.className = className;
    button.innerText = text;
    button.addEventListener('click', () => {
        func();
    });

    // Возвращаем созданную кнопку
    return button;
}