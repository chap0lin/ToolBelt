const buttons = document.querySelectorAll('button');


const display = document.querySelector('.display')
const output = document.querySelector('.output')

buttons.forEach(function(button) {
    button.addEventListener('click', calculate);
})

function calculate(calculation) {
    const ButtonValue = calculation.target.value;
    if (ButtonValue === '=') {
        if (display.value !== '') {
            output.value = eval(display.value)
        }
    }else if (ButtonValue ==='AC') {
        display.value = '';
        output.value = '';
    } else if (ButtonValue ==='pot') {
        output.value = Math.pow(display.value, 2);
    } else if (ButtonValue === 'sqrt') {
        output.value = Math.sqrt(display.value, 2)
    } else {
        display.value += ButtonValue
    }
}