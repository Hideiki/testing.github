const output = document.getElementById('output');
        
function showOutput(message) {
    output.innerHTML += message + '<br>';
}
        
function clearOutput() {
    output.innerHTML = '';
}

// FUNCTION DECLARATIONS

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32
}

function testDeclaration1() {
    clearOutput();
    showOutput("=== FUNCTION DECLARATION: Temperature Converter ===");
    showOutput("25°C = " + celsiusToFahrenheit(25) + "°F");
    showOutput("0°C = " + celsiusToFahrenheit(0) + "°F");
    showOutput("100°C = " + celsiusToFahrenheit(100) + "°F");
}

function checkEvenOdd(num) {
    return num % 2 === 0 ? "even" : "odd"
}

function testDeclaration2() {
    clearOutput() 
    showOutput(`=== Check Even or Odd ===`)
    showOutput(`2 is ${checkEvenOdd(2)}`)
    showOutput(`11 is ${checkEvenOdd(11)}`)
    showOutput(`42 is ${checkEvenOdd(42)}`)
}

function maxOfThree(a, b, c) {
    let max = a
    if (b > max) max = b
    if (c > max) max = c
    return max
}

function testDeclaration3() {
    clearOutput()
    showOutput(`=== MAX OF THREE NUMBERS ===`)
    showOutput(`The max number of three is ${maxOfThree(12, 7, 20)}`)
}

function simpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100
}

function testDeclaration4() {
    clearOutput()
    showOutput(`=== SIMPLE INTEREST ===`)
    showOutput(`Simple Interest: ${simpleInterest(1000, 5, 2)}`)
}

function countLetters(word) {
    return word.length
}

function testDeclaration5() {
    clearOutput()
    showOutput(`=== WORD COUNTER ===`)
    showOutput(`Letters Count: ${countLetters("javascript")}`)
}

// FUNCTION EXPRESSIONS

const rectangleArea = (length, width) => length * width

function testExpression1() {
    clearOutput()
    showOutput(`=== AREA OF RECTANGLE ===\n`)
    showOutput(`The area is ${rectangleArea(5, 3)}`)
}

const checkSign = function (num) {
    if (num > 0) return `positive`
    if (num < 0) return `negative`
    if (num === 0) return `zero`
}

function testExpression2() {
    clearOutput()
    showOutput(`=== CHECK SIGN ===\n`)
    showOutput(`-5 is ${checkSign(-5)}`)
    showOutput(`11 is ${checkSign(11)}`)
    showOutput(`23 is ${checkSign(23)}`)
    showOutput(`0 is ${checkSign(0)}`)
}

const timeGreeting = function(hour) {
    if (hour < 12) {
        return `Good morning`
    } else if (hour < 18) {
        return `Good afternoon`
    } else {
        return `Good evening`
    }
}

function testExpression3() {
    clearOutput()
    showOutput(`=== TIME GREETING ===\n`)
    showOutput(`Time now is 12nn - ${timeGreeting(12)}`)
    showOutput(`Time now is 9am - ${timeGreeting(9)}`)
    showOutput(`Time now is 8pm - ${timeGreeting(20)}`)
}

const applyDiscount = (price, discountPercent) => price - (price * discountPercent / 100)

function testExpression4 () {
    clearOutput()
    showOutput(`=== CALCULATE DISCOUNT ===\n`)
    showOutput(`Discount: ${applyDiscount(100, 20)}`)
}

const capitalizeFirst = function(word) {
    return word[0].toUpperCase() + word.slice(1)
}

function testExpression5 () {
    clearOutput()
    showOutput(`=== FIRST LETTER CAPITALIZER ===\n`)
    showOutput(`${capitalizeFirst(`javascript`)}`)
}

// FUNCTION DECLARATION AND EXPRESSIONS

function calculate(num1, num2, operator) {
    if (operator == `+`) return num1 + num2
    if (operator == `-`) return num1 - num2
    if (operator == `x`) return num1 * num2
    if (operator == `/`) return num1 / num2
}

function testBonus1 () {
    clearOutput()
    showOutput(`=== CALCULATOR FUNCTION ===\n`)
    showOutput(`The sum of 11 and 23 is ${calculate(11, 23, `+`)}`)
    showOutput(`The sum of 11 and 23 is ${calculate(23, 11, `-`)}`)
    showOutput(`The sum of 11 and 23 is ${calculate(11, 23, `x`)}`)
    showOutput(`The sum of 11 and 23 is ${calculate(23, 11, `/`).toFixed(2)}`)
}

const validatePassword = function(password) {
    if (password.length >= 8) {
        return "Valid"
    } else {
        return "Too short"
    }
}

function testBonus2() {
    clearOutput() 
    showOutput(`=== PASSWORD VALIDATOR ===\n`)
    showOutput(`Javascript password is ${validatePassword(`javascript`)}`)
    showOutput(`HTML password is ${validatePassword(`HTML`)}`)
}

function calculateBMI (weight, height) {
    return weight / (height * height)
}

function testBonus3 () {
    clearOutput()
    showOutput(`=== BMI CALCULATOR ===\n`)
    showOutput(`Height: 1.70 and Weight: 41 = BMI: ${calculateBMI(41, 1.70).toFixed(1)}`)
}

const fizzBuzz = function (num) {
    if (num % 15 === 0) return `FizzBuzz` 
    if (num % 3 === 0) return `Fizz`
    if (num % 5 === 0) return `Buzz`
}

function testBonus4() {
    clearOutput()
    showOutput(`=== FIZZ BUZZ ===\n`)
    showOutput(`15 is ${fizzBuzz(15)}`)
    showOutput(`3 is ${fizzBuzz(3)}`)
    showOutput(`5 is ${fizzBuzz(5)}`)
}

function ageCategory(age) {
    if (age < 13) return "Child"
    if (age < 20) return "Teen"
    if (age < 65) return "Adult"
    else return `Senior`
}

function testBonus5() {
    clearOutput()
    showOutput(`=== AGE CATEGORY ===\n`)
    showOutput(`Age 10 is ${ageCategory(10)}`)
    showOutput(`Age 18 is ${ageCategory(18)}`)
    showOutput(`Age 45 is ${ageCategory(45)}`)
    showOutput(`Age 75 is ${ageCategory(75)}`)
}