const display = document.getElementById(`display`)

let justCalculated = false

function updateDisplay(input) {
    if (justCalculated === true && input !== '+' && input !== '-' && input !== '*' && input !== '/') {
        display.textContent = input
        justCalculated = false
    }
    else if (display.textContent === `0`) {
        display.textContent = input
        justCalculated = false
    }
    else {
        if (input === `.` && display.textContent.slice(-1) === `.`) {
            return;
        }
        display.textContent += input
        justCalculated = false
    }
}

function clearDisplay() {
    display.textContent = `0`
    justCalculated - false
}

function calculate() {
    let expression = display.textContent;

    if (expression.includes(`+`)) {
        let numbers = expression.split(`+`)
        let num1 = parseFloat(numbers[0])
        let num2 = parseFloat(numbers[1])
        let result = num1 + num2
        display.textContent = result
    }
    else if (expression.includes(`-`)) {
        let numbers = expression.split(`-`)
        let num1 = parseFloat(numbers[0])
        let num2 = parseFloat(numbers[1])
        let result = num1 - num2
        display.textContent = result
    }
    else if (expression.includes(`x`)) {
        let numbers = expression.split(`x`)
        let num1 = parseFloat(numbers[0])
        let num2 = parseFloat(numbers[1])
        let result = num1 * num2
        display.textContent = result
    }
    else if (expression.includes(`÷`)) {
        let numbers = expression.split(`÷`)
        let num1 = parseFloat(numbers[0])
        let num2 = parseFloat(numbers[1])
        if (num2 !== 0) {
            let result = num1 / num2
            display.textContent = result
        } else {
            display.textContent = `Error`
            justCalculated = true
            return
        }
    } else {
        return
    }
    justCalculated = true
}

function backspace() {
    if (justCalculated === true) {
        display.textContent = `0`
        justCalculated = false
        return
    }

    let currentText = display.textContent

    if (currentText.length === 1 || currentText === `Error`) {
        display.textContent = `0`
    } else {
        display.textContent = currentText.slice(0, -1)
    }
}

let originalAppend = updateDisplay;

updateDisplay = function(input) {
    if (input === `.`) {
        let lastChat = display.textContent.slice(-1)
        if (lastChat === `.`)
            return
    }
    originalAppend(input)
}

function percent() {
    let currentNum = display.textContent
    let number = parseFloat(currentNum)
    let percentage = number / 100

    display.textContent = percentage

    justCalculated = false
}