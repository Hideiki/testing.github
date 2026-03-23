const output = document.getElementById(`output`)

function showOutput(message) {
    output.innerHTML += message + `<br>`
}

function clearOutput() {
    output.innerHTML = ""
}

function createMyArray() {
    clearOutput()

    const girlfriend = ["Jia", "Demi", "De Jesus"];
    
    showOutput(`=== NORMAL ARRAY ===\n`)
    showOutput(girlfriend.join(` `))
    showOutput(girlfriend[0])
    showOutput(girlfriend[girlfriend.length - 1])
    showOutput(girlfriend.length)
}

function accessColors() {
    clearOutput() 

    let colors = ["red", "blue", "green", "yellow", "purple", "orange"];

    showOutput(`=== ACCESS ARRAY ITEMS ===\n`)
    showOutput(colors[2])
    showOutput(colors[0])
    showOutput(colors[colors.length - 1])
    showOutput(colors[4])
}

function loopAnimals() {
    clearOutput()

    let animals = ["cat", "dog", "elephant", "lion", "tiger", "giraffe"];
    showOutput(`=== LOOP THRU ARRAY ===\n`)

    for (let i = 0; i < animals.length; i++) {
        showOutput(`Animal ${i + 1}: ${animals[i]}`)
    }
}

function addNumbers() {
    clearOutput()

    let numbers = [10, 20, 30];

    showOutput(`=== ADD ITEMS TO AN ARRAY ===\n`)
    showOutput(numbers.join(`, `))
    showOutput(numbers.length)
    numbers.push(40, 50, 60)
    showOutput(numbers.join(`, `))
    showOutput(numbers.length)
}

function removeLetters() {
    clearOutput()

    let letters = ["a", "b", "c", "d", "e"];

    showOutput(`=== REMOVE ITEMS TO AN ARRAY ===\n`)
    showOutput(letters)
    letters.pop()
    showOutput(letters)
    letters.shift()
    showOutput(letters)
}

function addToFront() {
    clearOutput()

    let cities = ["Tokyo", "Paris", "London"];

    showOutput(`=== ADD ITEMS TO THE BEGINNING ===\n`)
    showOutput(cities)
    cities.unshift(`New York`)
    cities.unshift(`Sydney`)
    showOutput(cities)

}

function findFruit() {
    clearOutput()

    let fruits = ["apple", "banana", "orange", "grape", "mango", "kiwi"];

    showOutput(`=== FINDING THE INDEX OF AN ITEM ===\n`)
    showOutput(fruits.indexOf(`orange`))
    showOutput(fruits.indexOf(`mango`))
    showOutput(fruits.indexOf(`watermelon`))
}

function checkGame() {
    clearOutput()

    let games = ["chess", "monopoly", "scrabble", "checkers", "dominoes"];

    showOutput(`=== CHECK IF ITEM EXISTS ===\n`)
    showOutput(`Games: ${games}\n`)

    let chess = games.includes(`chess`)
    showOutput(`Is chess in there? ${chess ? `YES` : `NO`}`)

    let poker = games.includes(`poker`)
    showOutput(`Is poker in there? ${poker ? `YES` : `NO`}`)
}

function combineArrays() {
    clearOutput()

    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    let arr3 = [7, 8, 9];

    showOutput(`=== COMBINE ARRAYS ===\n`)
    let combined1 = arr1.concat(arr2)
    showOutput(combined1)
    let combined2 = arr2.concat(arr3)
    showOutput(combined2)
    let allNumbers = arr1.concat(arr2, arr3)
    showOutput(allNumbers)
}

function sliceArray() {
    clearOutput()

    let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    showOutput(`=== SLICE AN ARRAY ===\n`)
    showOutput(`${numbers}\n`)
    showOutput(numbers.slice(0, 3)) //GET FIRST 3 ITEMS
    showOutput(numbers.slice(4, 8)) // GET INDEX 4 AND 7
    showOutput(numbers.slice(7, 10)) // GET LAST 3 ITEMS
    
}

function shoppingListGame() {
    clearOutput()
    let shoppingList = [];
    let choice;
    
    do {
        choice = prompt(`=== MENU ===\n1. Show all items\n2. Add an item\n3.Remove an item\n4.Check if item exists\n5.Exit`)

        if (choice === "1") {
            if (shoppingList.length === 0) {
                alert(`Your shopping list is empty`)
                showOutput(`List is empty!`)
            } else {
                let listStr = `Shopping List\n`
                for (let i = 0; i < shoppingList.length; i++) {
                    listStr += `${(i + 1)}. ${shoppingList[i]}\n`
                }
                alert(listStr)
                showOutput(`Showed list: ${shoppingList.join(`, `)}`)
            }
        } else if (choice === "2") {
            let newItem = prompt(`Enter item to add:`).toLowerCase()
            if(newItem && newItem.trim() !== "") {
                shoppingList.push(newItem.trim())
                alert(`${newItem} added to list!`)
                showOutput(`${newItem} has been added`)
            }
        } else if (choice === "3") {
            if(shoppingList.length === 0) {
                alert(`Your shopping list is empty!`)
            } else {
                let listStr = `Current items\n`
                for (let i = 0; i < shoppingList.length; i++) {
                    listStr += `${(i + 1)}. ${shoppingList[i]}\n`
                }
                alert(listStr)
                let index = prompt(`Enter number to remove:`)
                index = parseInt(index) - 1;

                if (index >= 0 && index < shoppingList.length) {
                    let removed = shoppingList.splice(index, 1)[0];
                    alert(`${removed} removed to list`)
                    showOutput(`${removed} has been removed.`)
                } else {
                    alert(`Invalid number!`)
                }
            }
        } else if (choice === "4") {
            if (shoppingList.length === 0) {
                alert(`Your shopping list is empty!`)
            } else {
                let search = prompt(`Enter item to search for:`).toLowerCase();
                if(search) {    
                    let index = shoppingList.indexOf(search.trim());
                    if (index !== -1) {
                        alert(`${search} found at position ${index + 1}!`)
                        showOutput(`Found: ${search} at index ${index}`)
                    }
                } else {
                    alert(`${search} is not in list!`)
                    showOutput(`Not Founds: ${search}`)
                }
            }
        } else if (choice === "5") {
            alert(`Goodbye!`)
            showOutput(`Exite shopping list!`)
        } else if (choice !== null) {
            alert(`Invalid choice! Enter 1-5`)
        }

    } while (choice !== "5")

}
