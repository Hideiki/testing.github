function showOutput(elementId, message) {
    document.getElementById(elementId).innerHTML = message
}

document.getElementById(`btnTask1`).addEventListener(`click`, () => {
    // Use setTimeout to display "Hello! This message was delayed" after 3 seconds
    // Also show a message immediately before the delay
    setTimeout(() => {
        let output = `Hello! This message was delayed`
        showOutput(`output1`, output)
        setTimeout(() => {
            let outputt = `Extra 2 seconds!`
            showOutput(`output1`, outputt)
        }, 2000)
    }, 3000)
})

document.getElementById(`btnTask2`).addEventListener(`click`, () => {
    // Show "3" immediately
    // After 1 second, show "2"
    // After 1 more second, show "1"
    // After 1 more second, show "Go!"
    showOutput(`output2`, `Launching...`)
    setTimeout(() => {
        showOutput(`output2`, `3`)
        setTimeout(() => {
        showOutput(`output2`, `2`)
            setTimeout(() => {
                showOutput(`output2`, `1`)
                setTimeout(() => {
                showOutput(`output2`, `Go!`) 
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
})

document.getElementById(`btnTask3`).addEventListener(`click`, () => {
    // Start with a blue box
    // After 2 seconds, change to green
    // After 2 more seconds, change to red
    // After 1 more second, change back to blue
    const box = document.getElementById(`colorBox`)
    setTimeout(() => {
        box.style.backgroundColor = `#30cc2d`
        box.textContent = `🟢 green`
        showOutput(`output3`, `green (2s)`)
        setTimeout(() => {
            box.style.backgroundColor = `#f54242`
            box.textContent = `🔴 red`
            showOutput(`output3`, `red (1s)`)
            setTimeout(() => {
                box.style.backgroundColor = `#7f2cd1`
                box.textContent = `🟣 purple`
                showOutput(`output3`, `purple (1s)`)
            }, 1000);
        }, 1000);
    }, 2000)
})

document.getElementById(`btnTask4`).addEventListener(`click`, () => {
    // Ask user for their name with prompt
    // Show "Welcome, [name]!" immediately
    // After 5 seconds, show "Reminder: Don't forget to save your work!"
    // After 3 more seconds, show "Have a great day!"
    let user = prompt(`What's your name?`)
    showOutput(`output4`, `Welcome ${user}!`)
    setTimeout(() => {
        showOutput(`output4`, `Reminder: Don't forget to save your work, ${user}!`)
        setTimeout(() => {
            showOutput(`output4`, `Have a great day!`)
        }, 3000);
    }, 5000);
})

document.getElementById(`btnTask5`).addEventListener(`click`, () => {
    let jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "What do you call a fake noodle? An impasta!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "How does a penguin build its house? Igloos it together!"
    ];  
    // Pick a random joke from the array
    // Choose a random delay between 1-5 seconds
    // Display "Loading joke..." immediately
    // After the random delay, show the joke
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
    const randomDelay = Math.floor(Math.random() * 4000) + 1000
    
    showOutput(`output5`, `⏳ Loading joke...`)
    setTimeout(() => {
        showOutput(`output5`, randomJoke)
    }, randomDelay);
})

document.getElementById(`btnBonus`).addEventListener(`click`, () => {
    let message = "I will forever love you to the fullest, Jia";
    let output = "";
    
    // Display each character with a 200ms delay
    // Start with empty string
    // After 200ms: "H"
    // After 400ms: "He"
    // After 600ms: "Hel"
    // ... until full message
    for (let i = 0; i <= message.length; i++) {
        setTimeout(() => {
            showOutput(`outputBonus`, message.substring(0, i) + (i < message.length ? `▌` : ``))
            if (i === message.length) {
                setTimeout(() => {
                showOutput(`outputBonus`, `${message} 💖`)
                }, 300)
            }
        }, i * 200);
    }
})