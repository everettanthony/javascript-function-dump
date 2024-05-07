const myInput = document.querySelector('.txt');
const result = document.querySelector('.val');

const debounce = (func, ms) => {
    let timeout;

    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), ms);
    };
}

const inputHandler = (event) => {
    result.textContent = event.target.value;
}

myInput.addEventListener('keyup', debounce(inputHandler, 1000));