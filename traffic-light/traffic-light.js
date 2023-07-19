// Инкапсулируем логику работы светофора
// Создаю константу с цветами
const LIGHTS = {
    red: 'red',
    yellow: 'yellow',
    green: 'green',
};

// Использую заданные выше переменные, чтобы связать цвета и их классами
const CLASSES_BY_LIGHT = {
    [LIGHTS.red]: 'traffic-light_red',
    [LIGHTS.yellow]: 'traffic-light_yellow',
    [LIGHTS.green]: 'traffic-light_green',
};

// Описываю порядок изменения цветов. Также можно было сделать это через массив.
const NEXT_LIGHT_BY_LIGHTS = {
    [LIGHTS.red]: [LIGHTS.green],
    [LIGHTS.green]: [LIGHTS.yellow],
    [LIGHTS.yellow]: [LIGHTS.red],
};

let currentLight = LIGHTS.red;

function switchLight (node) {
    const currentClass = CLASSES_BY_LIGHT[currentLight];
    const nextLight = NEXT_LIGHT_BY_LIGHTS[currentLight];
    const nextClass = CLASSES_BY_LIGHT[nextLight];

    currentLight = NEXT_LIGHT_BY_LIGHTS[currentLight];
    // Заменяем один класс на другой
    node.classList.replace(currentClass, nextClass)
}

// Передаю ноду, в которой светофор
function initLight(node) {
    node.classList.add(CLASSES_BY_LIGHT[currentLight]);
}