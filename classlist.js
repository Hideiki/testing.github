function showOutput(elementId, message) {
    document.getElementById(elementId).innerHTML = message
}

document.getElementById(`addBtn`).addEventListener(`click`, () => {
     // 1. Get the colorBox element
    // 2. Use classList.add() to add the 'highlight' class
    const demoBox = document.getElementById(`addBox`)
    demoBox.classList.add(`highlight`)
})

document.getElementById(`removeBtn`).addEventListener(`click`, () => {
     // 1. Get the removeBox element
    // 2. Use classList.remove() to remove the 'active' class
    const removeBox = document.getElementById(`removeBox`)
    removeBox.classList.remove(`active`)
})

document.getElementById(`toggleBtn`).addEventListener(`click`, () => {
    // 1. Get the toggleBox element
    // 2. Use classList.toggle() to toggle the 'dark-mode' class
    const toggleBox = document.getElementById(`toggleBox`)
    toggleBox.classList.toggle(`dark-mode`) //it will add the class name dark-mode if there's none. if it has, it will remove
})

document.getElementById(`replaceBtn`).addEventListener(`click`, () => {
    // 1. Get the replaceBox element
    // 2. Use classList.replace() to replace 'warning' with 'success'
    const replaceBox = document.getElementById(`replaceBox`)
    replaceBox.classList.replace(`warning`, `success`)
})

document.getElementById(`containsBtn`).addEventListener(`click`, () => {
    // 1. Get the checkBox element
    // 2. Use classList.contains() to check if it has 'special' class
    // 3. Show message: "Has special class!" or "Does NOT have special class"
    const containsBox = document.getElementById(`containsBox`)
    
    if (containsBox.classList.contains(`special`)) {
        containsBox.textContent = `Has special class!`
    } else {
        containsBox.textContent = `Does NOT have special class`
    }
})

//CHALLENGE ROUND

 // Create:
    // - A button that toggles "pressed" class (toggle)
    // - A button that adds "disabled" class (add)
    // - A button that removes "disabled" class (remove)
    // - A button that checks if button is disabled (contains)
    // - A button that replaces "small" with "large" (replace)
    
    // Show the current state in a display area
document.getElementById(`togglePressedBtn`).addEventListener(`click`, () => {
    const demoBox = document.getElementById(`bonusBox`)

    demoBox.classList.toggle(`pressed`)
})

document.getElementById(`addDisabledBtn`).addEventListener(`click`, () => {
    const demoBox = document.getElementById(`bonusBox`)

    demoBox.classList.add(`disabled`)
})

document.getElementById(`removeDisabledBtn`).addEventListener(`click`, () => {
    const demoBox = document.getElementById(`bonusBox`)

    demoBox.classList.remove(`disabled`)
})

document.getElementById(`checkDisabledBtn`).addEventListener(`click`, () => {
    const demoBox = document.getElementById(`bonusBox`)

    if (demoBox.classList.contains(`disabled`)) {
        showOutput(`outBonus`, `✅ It has disabled class`)
    } else {
        showOutput(`outBonus`, `❌ No disabled class yet`)
    }
})

document.getElementById(`replaceSizeBtn`).addEventListener(`click`, () => {
    const demoBox = document.getElementById(`bonusBox`)
    demoBox.classList.toggle(`small`) //i used toggle for toggle small and large
})