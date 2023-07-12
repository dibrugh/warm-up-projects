const INITIAL_COUNTER = 0;

const counter = createCounter(INITIAL_COUNTER);
// Создаём view
const view = createView({
    onIncrementButtonClick: handleIncrementButtonClick,
    onDecrementButtonClick: handleDecrementButtonClick,
    onResetButtonClick: handleResetButtonClick

});

/* Получаем значение counter
counter.get()  */

// Передаём значение на render
view.render({
    counter: counter.get()
});

function handleIncrementButtonClick() {
    // При клике на кнопку вызываем метод инкремент
    counter.increment();
    // Ререндерим страницу
    view.render({
        counter: counter.get()
    });
};

function handleDecrementButtonClick() {
    // При клике на кнопку вызываем метод декремент
    counter.decrement();
    // Ререндерим страницу
    view.render({
        counter: counter.get()
    });
};

function handleResetButtonClick() {
    // При клике на кнопку вызываем метод ресет
    counter.reset();
    // Ререндерим страницу
    view.render({
        counter: counter.get()
    });
};