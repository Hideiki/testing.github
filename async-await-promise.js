
function createBasicPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`✅ Promise resolved after 2 seconds`)
        }, 2000);
    })
}
document.getElementById(`btn1`).addEventListener(`click`, () => {
    const output = document.getElementById(`out1`)
    output.innerHTML = `<span class="pending">⏳ Promise pending... waiting 2 seconds</span>`

    createBasicPromise()
        .then(result => {
            output.innerHTML = `<span class="success">${result}</span>`
        })
        .catch(error => {
            output.innerHTML = `<span class="error">${error}</span>`
        })
})

function randomPromise() {
    // 1. Create a Promise that randomly resolves or rejects
    // 2. Use Math.random() to decide (50% chance)
    // 3. If resolves: return "✅ Success! Promise resolved!"
    // 4. If rejects: return "❌ Failed! Promise rejected!"
    // 5. Handle both .then() and .catch()
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random()
            if (random > 0.5) {
                resolve(`✅ Success! Promise resolved! (You got lucky!)`)
            } else {
                reject(`❌ Failed! Promise rejected! (Better luck next time)`)
            }
        }, 1500);
    })
}

document.getElementById(`btn2`).addEventListener(`click`, () => {
    const output = document.getElementById(`out2`)
    output.innerHTML = `<span class="pending">🎲 Rolling the dice... waiting 1.5 seconds...</span>`

    randomPromise().then(result => {
        output.innerHTML = `<span class="success">${result}</span>`
    })
    .catch(error => {
        output.innerHTML = `<span class="error">${error}</span> `
    })
})

// 1. Create a function that returns a Promise that resolves after 2 seconds
    // 2. Use async/await to wait for the Promise
    // 3. Use try/catch for error handling
    // 4. Display the result
function asyncPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random()
            if (random > 0.5) {
                resolve(`✅ Nice! You got your Promise. You can go now!`)
            } else {
                reject(`❌ Sadly, you won't get your Promise. Come another day!`)
            }
        }, 2000)
    })
}

document.getElementById(`btn3`).addEventListener(`click`, () => {
    const output = document.getElementById(`out3`)
    output.innerHTML = `<span class="pending">✋🏻 Let's wait if you can go... waiting 2 seconds...</span>`

    async function asyncBasic() {
        try {
            let result = await asyncPromise()
            output.innerHTML = `<span class="success">${result}</span>` 
        }
        catch(error) {
            output.innerHTML = `<span class="error">${error}</span>` 
        }
    }
    asyncBasic()
})

 // Create 3 functions that return Promises:
    // - step1: wait 1 second, return "Step 1 complete"
    // - step2: wait 1 second, return "Step 2 complete"
    // - step3: wait 1 second, return "Step 3 complete"
    
    // Use await to run them in order
    // Display each result as it completes
function step1Promise () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Step 1 Complete`)
        }, 1000);
    })
}

function step2Promise () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Step 2 Complete`)
        }, 1000);
    })
}

function step3Promise () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Step 3 Complete`)
        }, 1000);
    })
}

async function multiplePromises() {
    const output = document.getElementById(`out4`)
    output.innerHTML = `<span class="pending">⏳ Starting sequence...</span>`

    try {
        let result1 = await step1Promise()
        output.innerHTML = `<span class="success">✅ ${result1}</span><br>`

        let result2 = await step2Promise()
        output.innerHTML += `<span class="success">✅ ${result2}</span><br>`

        let result3 = await step3Promise()
        output.innerHTML += `<span class="success">✅ ${result3}</span><br>`
        output.innerHTML += `<span class="success">🎉 All steps completed!</span>`
    }
    catch(error) {
        output.innerHTML = `<span class="error">❌ Error: ${error}</span>`
    }
}

document.getElementById(`btn4`).addEventListener(`click`, multiplePromises)

// Create a function that checks username/password
    // If username "admin" and password "1234" → resolve
    // Else → reject with error message
    
    // Ask user for username and password (prompt)
    // Use async/await to wait for login check
    // Show success or error message
function userPass(userChoice, passChoice) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userChoice === `admin` && passChoice === `1234`) {
                resolve(`✅ Access successfully!`)
            } else {
                reject(`❌ Access denied!`)
            }
        }, 2000);
    })
}

async function loginCheck() {
    const output = document.getElementById(`out5`)
    output.innerHTML = `<span class="pending">⏳ Login checking...</span>`

    const username = prompt(`Enter your username:`) 
    if (!username) {
        output.innerHTML = '<span class="error">❌ Login cancelled</span>'
        return
    }

    const password = prompt(`Enter your password`)
    if (!password) {
        output.innerHTML = '<span class="error">❌ Login cancelled</span>'
        return
    }

    try {
        let result = await userPass(username, password)
        output.innerHTML = `<span class="success">${result}</span><br>`
    }   
    catch(error) {
        output.innerHTML = `<span class="error">${error}</span><br>`
    }
}

document.getElementById(`btn5`).addEventListener(`click`, loginCheck)

// Create 3 questions (e.g., "What is 2+2?") ===PROMPT
    // Each question should return a Promise that:
    // - Resolves if answer correct
    // - Rejects if answer wrong
    
    // Use async/await to handle each question
    // Track score === SCORE COUNTER
    // Show final result

function answerCheck(question, correctAnswer) {
    return new Promise((resolve, reject) => {
        const userAnswer = prompt(question)
        if (userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase()) {
            resolve(`✅ Correct! ${userAnswer} is right!`)
        } else if (userAnswer === null){
            reject(`Quiz cancelled`)
        } else {
            reject(`❌ Wrong! Correct answer was ${correctAnswer}`)
        }
    }) 
}

async function questionHandler() {
    const output = document.getElementById(`outBonus`)
    output.innerHTML = `<span class="pending">🤔 Checking all the answers...</span>`


    let score = 0
    let result = []

    try {
        const q1 = await answerCheck(`What's 2 + 2?`, `4`)
        result.push(q1)
        score = 10
        output.innerHTML = result.join(`<br>`)

        const q2 = await answerCheck(`What's the first color of the rainbow?`, `red`)
        result.push(q2)
        score += 10
        output.innerHTML = result.join(`<br>`)

        const q3 = await answerCheck(`What is the programming language use along with HTML and CSS?`, `javascript`)
        result.push(q3)
        score += 10
        output.innerHTML = result.join(`<br>`)

        output.innerHTML += `<br><span class="success">🎉 Quiz complete! Your score: ${score}/30! 🎉</span>`
    } 
    catch(error) {
        output.innerHTML = `<br><span class="error">${error}</span>` 
        output.innerHTML += `<br><span class="pending">Final score: ${score}/30</span>`
    }
}

document.getElementById(`btnBonus`).addEventListener(`click`, questionHandler)