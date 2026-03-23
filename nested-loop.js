const output = document.getElementById(`output`)

function showOutput(message) {
    output.innerHTML += message + `<br>`
}

function clearOutput() {
    output.innerHTML = ""
}

function daysAndHours() {
    clearOutput()
    for (let day = 1; day <= 3; day++) {
        for (let hour = 1; hour <= 4; hour++) {
            showOutput(`Day ${day}: Hour ${hour}`)
        }
    }
}

function starBox() {
    clearOutput()
    for (let row = 1; row <= 3; row++) {
        let rows = ""
        for (let cols = 1; cols <= 5; cols++) {
            rows += `*`
        }
        showOutput(rows)
    }
}

function countingChart() {
    clearOutput()
    for (let i = 1; i <= 5; i++) {
        let numbering = `${i}: `
        for (let j = 1; j <= 3; j++) {
            numbering += `${j} `
        }
        showOutput(numbering)
    }
}

function smallTimesTable() {
    clearOutput() 
    for (let i = 2; i <=3; i++) {
        for (let j = 1; j <= 4; j++) {
            let total = i * j
            showOutput(`${i} x ${j} = ${total}`)
        }
        showOutput(`\n`)
    }
}

function numberTriangle() {
    clearOutput() 

    for (let row = 1; row <= 5; row++) {
        let number = ""
        for (let j = 1; j <= row; j++) {
            number += `${j} `
        }
        showOutput(number)
    }
}

function reverseTriangle() {
    clearOutput() 

    for (let row = 5; row >= 1; row--) {
        let number = ""
        for (let j = 1; j <= row; j++) {
            number += `${j} `
        }
        showOutput(number)
    }
}

function simpleGrid() {
    clearOutput()

    for (let i = 1; i <= 3; i++) {
        let grid = ""
        for (let j = 1; j <= 4; j++) {
            grid += `(${i},${j}) `
        }
        showOutput(grid)
    }
}

function timesTableWithHeaders() {
    clearOutput()
    let header = ""
    for (let i = 2; i <= 3; i++) {
        header = `=== ${i} Times Table ===`
        showOutput(header)
        for (let j = 1; j <= 4; j++) {
            let total = i * j
            showOutput(`${i} x ${j} = ${total}`)
        }
        showOutput(`\n`)
    }
}

function starPatterns() {
    clearOutput()
    let choice = Number(prompt(`Choose: 1 = triangle 2 = square:`))
    let found = true
    if (choice < 0 || choice > 2) {
        alert(`❌ Choose 1 or 2 only!`)
        found = false
    }
    let size = Number(prompt(`Enter size:`))
    
    if (choice == "1") {
        for (let i = 1; i <= size; i++) {
            let row = ``
            for (let j = 1; j <= i; j++) {
                row += `*`
            }
            showOutput(row)
        }
    } else if (choice == "2") {
        for (let i = 1; i <= size; i++) {
            let row = ''
            for (let j = 1; j <= size; j++) {
                row += `*`
            }
            showOutput(row)
        }
    }
}

function clockWithAmPm() {
    clearOutput()
    let ampm = ["AM", "PM"]

    for (let i = 0; i < ampm.length; i++) {
        for (let j = 1; j <= 12; j++) {
            showOutput(`${j}:00 ${ampm[i]}`)
        }
    }
}