function showOutput(elementId, message) {
    document.getElementById(elementId).innerHTML = message
}

function challenge1() {
    // 1. Create a new Date object for now
    // 2. Display it in these formats:
    //    - Full date and time (toString)
    //    - Just date (toLocaleDateString)
    //    - Just time (toLocaleTimeString)
    //    - Custom format: "Today is [day] [month] [year]"
    const date = new Date()

    let output = `Current Date and Time<br><br>`
    output += `Full date and time: ${date}<br>`
    output += `Just date: ${date.toLocaleDateString()}<br>`
    output += `Just time: ${date.toLocaleTimeString()}<br>`
    output += `Custom format: "Today is ${date.getDate()}, ${date.getMonth()}, ${date.getFullYear()}"`
    showOutput(`output1`, output)
}

function challenge2() {
    // 1. Create a new Date object
    // 2. Get and display:
    //    - Year
    //    - Month (remember: add 1 to get real month!)
    //    - Day of month
    //    - Day of week (0-6, convert to name)
    //    - Hours, Minutes, Seconds
    const date = new Date()

    let day = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`]
    let month = [`January`, `February`, `March`, `April`, `May`, `June`, `July`,`August`,`September`, `October`, `November`, `December`]

    let output = `Year: ${date.getFullYear()}<br>`
    output += `Month: ${month[date.getMonth()]}<br>`
    output += `Day of Month: ${date.getDate()}<br>`
    output += `Day of week: ${day[date.getDay()]}<br>`
    output += `Hours, Minutes, Seconds: (${date.getHours()}) (${date.getMinutes()}) (${date.getSeconds()})`
    
    showOutput(`output2`, output)
}

function challenge3() {
    // 1. Ask user for their birth month and day (use prompt)
    // 2. Create a date for this year's birthday
    // 3. If birthday already passed this year, use next year
    // 4. Calculate days between today and birthday
    // 5. Display result
    let choice1 = prompt(`What's your birth month?`)
    let choice2 = prompt(`What's your birth day?`)

    if (!choice1 || !choice2) {
        showOutput(`output3`, `❌ Please enter both month and day!`)
        return;
    }

    choice1 = parseInt(choice1)
    choice2 = parseInt(choice2)

    let today = new Date()
    let currentYear = today.getFullYear()

    let birthday = new Date(currentYear, choice1, choice2)

    if (birthday < today) {
        birthday = new Date(currentYear + 1, choice1, choice2)
    }

    let diffTime = birthday - today
    let diffDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    let month = [`January`, `February`, `March`, `April`, `May`, `June`, `July`,`August`,`September`, `October`, `November`, `December`]

    let output = `Your birthday: ${month[choice1]} ${choice2}<br>`
    output += `Days until your next birthday: ${diffDay} days!`

    showOutput(`output3`, output)
}

function challenge4() {
    // 1. Ask user for their birth year
    // 2. Get current year
    // 3. Calculate age
    // 4. Display result with month/day consideration (optional)
    let birthYear = prompt(`What's your birth year?`)

    let date = new Date()
    let currentYear = date.getFullYear()

    let age = currentYear - birthYear

    let output = `You are motherfucking ${age} right now. Damn!`

    showOutput(`output4`, output)
}

function challenge5() {
    // 1. Create a date object for today
    // 2. Create an array of month names
    // 3. Format as: "March 19, 2024" (using month name)
    // 4. Also try: "19 March 2024" (different order)
    const date = new Date()

    let month = [`January`, `February`, `March`, `April`, `May`, `June`, `July`,`August`,`September`, `October`, `November`, `December`]

    let monthName = month[date.getMonth()]
    let day = date.getDate()
    let year = date.getFullYear()

    let output = `Today is ${monthName} ${day}, ${year}<br>`
    output += `Alternative format: ${day} ${monthName} ${year}<br>`
    output += `Standard format: ${date.toLocaleDateString()}`

    showOutput(`output5`, output)
}

function bonusChallenge() {
    // 1. Get today's day of week (0-6)
    // 2. Calculate days until Saturday (6)
    // 3. Or until Sunday (0) - whichever is closer
    // 4. Display appropriate message
    //    - If weekend: "It's weekend! 🎉"
    //    - If 1 day: "Only 1 day until weekend!"
    //    - Otherwise: "X days until weekend"
    let today = new Date()
    let days = today.getDay()
    let output = ``

    let weekend = 6 - days

    if (weekend === 0) {
        output = `It's weekend!`
    } else if (weekend === 1) {
        output = `Only 1 day until weekend!`
    } else { 
        output = `${weekend} days until weekend`
    }
    showOutput(`outputBonus`, output)
}