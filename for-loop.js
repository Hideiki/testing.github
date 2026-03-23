const output = document.getElementById(`output`)

function showOutput(message) {
    output.innerHTML += message + "<br>"
}

function clearOutput(){
    output.innerHTML = ""
}

function countToTen() {
    clearOutput()
    for (let i = 1; i <= 10; i++) {
        showOutput(i)
    }
}

function evenNumbers() {
    clearOutput()
    for (let i = 2; i <= 20; i += 2) {
        output.innerHTML += `${i}\n`
    }
}

function sumToHundred () {
    clearOutput()
    let sum = 0
    for (let i = 1; i <= 100; i++) {
        sum += i 
    }
    showOutput(`The sum of 1 to 100 = ${sum}`)
}

function multiplicationTable () {
    clearOutput()
    let num = Number(prompt(`Enter a number to multiply:`))

    for (i = 1; i <= 10; i++) {
        let total;
        total = num * i
        showOutput(`${num} x ${i} = ${total}`)
    }
}

function countdown () {
    clearOutput()
    for (i = 10; i >= 1; i--) {
        showOutput(i)
    }
    showOutput(`BLAST OFF!`)
}

function factorial() {
    clearOutput()
    let num = Number(prompt(`Enter a number:`))
    let result = 1

    for (i = 1; i <= num; i++) {
        result *= i
    }
    showOutput(`${num}! = ${result}`)
}

function starPattern () {
    clearOutput()
    let rows = Number(prompt(`How many rows?`))

    for (let i = 1; i <= rows; i++) {
        let stars = ""
        for (j = 1; j <= i; j++) {
            stars += "*"
        }
        showOutput(stars)
    }
}

function averageFive() {
    clearOutput()
    let sum = 0

    for (let i = 1; i <= 5; i++) {
        let num = Number(prompt(`Enter number ${i}:`))
        sum += num
    }
    let average = sum / 5;
    showOutput(`Average: ${average.toFixed(2)}`)
}

function findLargest() {
    clearOutput()
    let largest = -Infinity

    for (let i = 1; i <= 5; i++) {
        let num = Number(prompt(`Enter number ${i}:`))
        if (num > largest) {
            largest = num
        }
    }
    showOutput(`Largest number: ${largest}`)
}

function reverseWord() {
    clearOutput()
    let word =  prompt(`Enter a word:`)
    let reversed = ""

    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i]
    }
    showOutput(`Reversed: ${reversed}`)
}

function diceRoller() {
    clearOutput()
    for (let i = 1; i <= 10; i++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        showOutput(`Roll ${i}: ${roll}`)
    }
}