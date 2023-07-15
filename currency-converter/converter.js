// Описываем константы
const RATES = {
    usd: 3.006,
    eur: 3.353,
};

// Т.к хотим передавать в эту функцию объект, деструктуризируем параметры
function convert( {byn, currency} ) {
    // Проверка на существование валюты
    if (!RATES[currency]) {
        return null; // Можно также возвращать ошибку
    }

    return byn * RATES[currency];
}