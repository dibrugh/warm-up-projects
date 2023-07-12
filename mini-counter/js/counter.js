// Создаём изолированную функцию счётчик и методы работы с ним
function createCounter(initialCounter) {
    return {
        counter: initialCounter,
        get() {
            return this.counter;
        },
        increment: function() {
            this.counter++;
        },
        decrement() {
            this.counter--;
        },
        reset() {
            this.counter = initialCounter;
        }
    };
}