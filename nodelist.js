function showOutput(elementId, message) {
    document.getElementById(elementId).innerHTML = message
}

document.getElementById(`countBtnsBtn`).addEventListener(`click`, () => {
     // 1. Get all buttons using querySelectorAll
    // 2. Log the number of buttons
    // 3. Log the text of each button
    // 4. Log the first and last button text
    let buttons = document.querySelectorAll(`.demo-btn`);
    let output = `Found ${buttons.length} buttons<br>`;

    buttons.forEach((button, index) => {
        output += `Button ${index + 1}: ${button.textContent}<br>`;
    });
    output += `First button: ${buttons[0]?.textContent}<br>`;
    output += `Last button: ${buttons[buttons.length - 1]?.textContent}`;
    showOutput(`out1`, output);
});

function highlightFruits() {
    const fruits = document.querySelectorAll('#fruitList li');
    fruits.forEach(li => {
        li.style.background = '#facc15';
        li.style.color = '#0f172a';
        li.style.padding = '0.5rem';
        li.style.borderRadius = '0.5rem';
    });
    showOutput(`out2`, `All fruits highlighted using forEach on NodeList`);
};

function removeFruits() {
    const fruits = document.querySelectorAll(`#fruitList li`);
    fruits.forEach(li => {
        li.style.background = ``;
        li.style.color = ``;
    });
    showOutput(`out2`, `Reset to Original`);
};

document.getElementById(`highlightBtn`).addEventListener(`click`, highlightFruits);
document.getElementById(`resetHighlightBtn`).addEventListener(`click`, removeFruits);

document.getElementById(`doubleBtn`).addEventListener(`click`, () => {
    // 1. Get all elements with class "numbers" (NodeList)
    // 2. Convert NodeList to Array (Array.from or spread operator)
    // 3. Use map() to double the text content
    // 4. Update each div with the new value
    const numbers = document.querySelectorAll(`#numbersContainer .numbers`)
    const numberArrays = Array.from(numbers)

    const doubleArray = numberArrays.map(div => {
        let value = parseInt(div.textContent)
        return value * 2
    })

    numberArrays.forEach((div, index) => {
        div.textContent = doubleArray[index]
    })
    showOutput(`out3`, `Converted NodeList to Array`)
})