// MAP ()

function mapDouble() {
    const numbers = [2, 5, 8, 10, 3]

    const numberss = numbers.join(`, `)
    const double = numbers.map(num => num * 2).join(`, `)

    alert(`Original: ${numberss}`)
    alert(`Double: ${double}`)
}

function mapWithUnits() {
    let prices = [5, 10, 15, 20]

    const symbolPrice = prices.map(num => `$${num}`).join(`, `)

    alert(`Prices with $: ${symbolPrice}`)
}

function mapNames() {
    let users = [{
        name: `Alice`,
        age: 25
    }, {
        name: `Bob`,
        age: 30  
    }, {
        name: `Charlie`,
        age: 35
    }]

    let names = users.map(user => user.name).join(`, `)

    alert(`Names: ${names}`)
}

// FILTER ()

function filterEvens() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    let evenNumbers = numbers.filter(num => num % 2 === 0).join(`, `)

    alert(`Even numbers: ${evenNumbers}`)
}

function filterAdults() {
    let ages = [12, 17, 18, 21, 15, 30, 10]

    let adults = ages.filter(age => age > 17).join(`, `)

    alert(`Adults: ${adults}`)
}

function filterLongWords() {
    let words = [`cat`, `elephant`, `dog`, `butterfly`, `ant`, `dragonfly`]

    let longWords = words.filter(word => word.length > 4).join(`, `)

    alert(`Long words: ${longWords}`)
}

// REDUCE ()

function reduceSum() {
    let numbers = [5, 10, 15, 20, 25]

    let total = numbers.reduce((accumulator, element) => accumulator + element)

    alert(`Total: ${total}`)
}

function reduceMax() {
    let numbers = [8, 3, 16, 6, 22, 19]

    let maxNum = numbers.reduce((previous, next) => Math.max(previous, next))

    alert(`Max number: ${maxNum}`)
}

function reduceTotalChars() {
    let words = [`hello`, `world`, `javascript`, `code`]

    let totalChars = words.reduce((accumulator, element) => accumulator + element.length, 0)

    alert(`Total characters: ${totalChars}`)
}

// MATH OBJECTS

function mathRounding() {
    let numbers = [4.2, 6.7, 3.5, 8.1, 2.9]

    for (let num of numbers) {
        alert(`${num} - round: ${Math.round(num)}, floor: ${Math.floor(num)}, ceil: ${Math.ceil(num)}\n`)
    }
}

function mathRandom() {
    const min = 50
    const max = 100
    const min1 = 1
    const max1 = 10
    const min2 = -10
    const max2 = 10

    let random = Math.random()
    let randomNum = Math.floor(Math.random() * (max - min)) + min
    let randomNum1 = Math.floor(Math.random() * (max1 - min1)) + min1
    let randomNum2 = Math.floor(Math.random() * (max2 - min2)) + min2

    alert(`Random: ${random}`)
    alert(`Random 1-10: ${randomNum1}`)
    alert(`Random 50-100: ${randomNum}`)
    alert(`Random -10-10: ${randomNum2}`)
}

function mathMinMax() {
    let numbers = [23, 56, 12, 89, 34, 67, 45]

    let max = Math.max(...numbers)
    let min = Math.min(...numbers)
    
    alert(`Numbers: ${numbers.join(`, `)}`)
    alert(`Max: ${max}`)
    alert(`Min: ${min}`)
}

function mathPowerRoot() {
    let choice = Number(prompt(`Enter a number:`));

    if (isNaN(choice)) {
        alert(`❌ Invalid number`)
        return;
    }

    let square = Math.pow(choice, 2)
    let cube = Math.pow(choice, 3)
    let squareRt = Math.sqrt(choice)

    alert(`Number: ${choice}, square: ${square}, cube: ${cube}, square root: ${squareRt}`)
}

function mathDiceRoller() {
    let rolls = []
    let total = 0
    let highest = 0
    let lowest = 12

    for (let i = 1; i <= 10; i++) {
        let die1 = Math.floor(Math.random() * 6) + 1
        let die2 = Math.floor(Math.random() * 6) + 1
        let sum = die1 + die2

        rolls.push(sum)
        total += sum

        if(sum > highest) highest = sum
        if(sum < lowest) lowest = sum

        let double = die1 === die2 ? `Doubles!` : ``
        alert(`Roll ${i}: Die1 = ${die1} / Die2 = ${die2}. Total ${sum} ${double}`)
    }

    let average = total / rolls.length

    alert(`Total of rolls: ${total}\nAverage roll: ${average}\nHighest roll: ${highest}\nLowest roll: ${lowest}`)
}

function shoppingCartBonus() {
    let cart = [
        { name: "Laptop", price: 1000, quantity: 1 },
        { name: "Mouse", price: 25, quantity: 2 },
        { name: "Keyboard", price: 75, quantity: 1 },
        { name: "Monitor", price: 300, quantity: 1 },
        { name: "USB Cable", price: 10, quantity: 3 }
    ];

    let itemTotal = cart.map(carts => ({name: carts.name, total: carts.price * carts.quantity}))
    itemTotal.forEach(item => {alert(`${item.name}: $${item.total}`)})
    let costMore = cart.filter(carts => carts.price > 50)
    costMore.forEach(item => {alert(`${item.name}: $${item.price} (x${item.quantity})`)})
    let cartTotal = cart.reduce((total, item) => {return total + (item.price * item.quantity)}, 0)
    alert(`Cart total: $${cartTotal}`)
    let expensive = cart.reduce((most, item) => {return item.price > most.price ? item : most}, cart[0]) 
    alert(`${expensive.name}: $${expensive.price}`)
    
}