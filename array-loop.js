const output = document.getElementById(`output`)

function showOutput(message) {
    output.innerHTML += message + `<br>`
}

function clearOutput() {
    output.innerHTML = ""
}

function favoriteFoods() {
    clearOutput()

    let foods = ["Pizza", "Sushi", "Tacos", "Pasta", "Ice Cream"]

    for (let i = 0; i < foods.length; i++) {
        showOutput(`${i + 1}. ${foods[i]}`)
    }
}

function sumArray() {
    clearOutput()
    let numbers = [5, 10, 15, 20, 25]
    let sum = 0

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    showOutput(`Sum = ${sum}`)
}

function findLargest() {
    clearOutput()
    let scores = [67, 89, 92, 78, 88]
    let largest = scores[0]

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > largest) {
            largest = scores[i]
        }
    }
    showOutput(`Largest number is ${largest}`)
}

function groceryTotal() {
    clearOutput()
    let items = ["Milk", "Bread", "Eggs", "Cheese"]
    let prices = [3.50, 2.25, 4.00, 5.50]
    let total = 0

    for (let i = 0; i < items.length; i++) {
        showOutput(`${items[i]}: $${prices[i].toFixed(2)}`)
        total += prices[i]
    }
    showOutput(`Total: $${total}`)
}

function studentGrades() {
    clearOutput()
    let students = ["Alice", "Bob", "Charlie", "Diana"]
    let grades = [85, 62, 91, 78]
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        if (grades[i] > 75) {
            showOutput(`${students[i]}: ${grades[i]} - PASSED`)
        } else if (grades[i] < 75) {
            showOutput(`${students[i]}: ${grades[i]} - FAILED`)
        }
        sum += grades[i]
    }
    let average = sum / students.length
    showOutput(`Average: ${average.toFixed(2)}`)
}

function reverseArray() {
    clearOutput()
    let colors = ["red", "blue", "green", "yellow"]

    for (let i = colors.length - 1; i >= 0; i--) {
        showOutput(colors[i])
    }
}

function doubleNumbers() {
    clearOutput()
    let numbers = [2, 5, 8, 3]
    let doubled = []

    for (let i = 0; i < numbers.length; i++) {
        doubled.push(numbers[i] * 2)
    }
    showOutput(`Original: ${numbers.join(", ")}`)
    showOutput(`Doubled: ${doubled.join(", ")}`)  
}

function countAbove50() {
    clearOutput()
    let nums = [23, 67, 89, 12, 85, 44, 72]
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 50) {
            count++
        }
    }
    showOutput(`Numbers above 50: ${count}`)
}

function findFruit() { clearOutput()
    let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
    let search = prompt("Enter a fruit:").toLowerCase();
    let found = false;

    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === search) {
            found = true
        }
    }
    if (found) {
        showOutput(`✅ ${search} is in the list!`) 
    } else {
        showOutput(`❌ ${search} is not in the list!`) 
    }
}

function namesAndAges() { 
    clearOutput()
    let names = ["John", "Sarah", "Mike", "Lisa"];
    let ages = [25, 30, 22, 28];

    for (let i = 0; i < names.length; i++) {
        showOutput(`${names[i]} is ${ages[i]} years old`)
    }
}

function shoppingCart() {
    clearOutput();
    let items = [];
    let prices = [];
            
    while (true) {
        let item = prompt("Enter item name (or 'done'):");
        if (!item || item.toLowerCase() === "done") break;
                
        let price = Number(prompt("Price for " + item + ":"));
        if (!isNaN(price) && price > 0) {
            items.push(item);
            prices.push(price);
            showOutput("Added: " + item + " - $" + price.toFixed(2));
        } else {
            alert("Invalid price!");
            }
        }
            
        if (items.length > 0) {
            showOutput("\n=== YOUR CART ===");
            let total = 0;
            for (let i = 0; i < items.length; i++) {
                showOutput(items[i] + ": $" + prices[i].toFixed(2));
                total += prices[i];
            }
            showOutput("\n💰 Total: $" + total.toFixed(2));
        } else {
            showOutput("Cart is empty.");
    }
}