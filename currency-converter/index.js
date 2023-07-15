const valueInputNode = document.querySelector('.js-value-input');
const currencySelectorNode = document.querySelector('.js-currency-selector');
const outputNode = document.querySelector('.js-output');

valueInputNode.addEventListener('input', () => {
    const result = convert(getInput());
    render(result);
});

currencySelectorNode.addEventListener('change', () => {
    const result = convert(getInput());
    render(result);
})


function getInput() {
    return {
        byn: Number(valueInputNode.value),
        currency: currencySelectorNode.value,
    }
}

function render (result) {
    outputNode.innerText = result;
}