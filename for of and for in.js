const output = document.getElementById(`output`)

function showOutput(message) {
    output.innerHTML += message + `<br>`
}

function clearOutput() {
    output.innerHTML = ""
}

function arrayBothWays() {
    clearOutput()

    let fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];

    for (let index in fruits) {
        showOutput(`Index ${index}: ${fruits[index]}`)
    }
}

function objectBothWays() {
    clearOutput()
    let person = {
        name: 'Alice',
        age: 25,
        city: 'New York',
        job: 'Developer',
        hobby: 'Painting'
    };

    for (let key in person) {
        showOutput(`${key}: ${person[key]}`)
    }
}

function stringBothWays() {
    clearOutput()

    let word = `Jia Demi De Jesus`

    for (let index in word) {
        showOutput(`Index ${index}: ${word[index]}`)
    }
}

function nestedLoopChallenge() {
    clearOutput() 

    let students = [
        { name: 'Alex', grade: 85, city: 'Boston' },
        { name: 'Bella', grade: 92, city: 'Miami' },
        { name: 'Charlie', grade: 78, city: 'Chicago' }
    ];
    let studentNum = 1

    for (let student of students) {
        showOutput(`Student ${studentNum}`)
        for (let key in student) {
            showOutput(`${key}: ${student[key]}`)
        }
        studentNum++
        showOutput(``)
    }
}

function shoppingCartTotal() {
    clearOutput()

    let cart = [
        { item: 'Laptop', price: 1000, quantity: 1 },
        { item: 'Mouse', price: 25, quantity: 2 },
        { item: 'Keyboard', price: 75, quantity: 1 },
        { item: 'Monitor', price: 300, quantity: 1 }
    ];

    let total = 0;

    for (let shop of cart) {
        total += shop.price * shop.quantity
    }
    showOutput(`Grand total: $${total}`)

    for (let shop of cart) {
        let count = 0
        for (let prop in shop) {
            count++
        }
        showOutput(`${shop.item}: ${count} properties`)
    }
}

function findAndReplace() {
    clearOutput()

    let inventory = [
        { product: 'Shirt', price: 25, inStock: true },
        { product: 'Pants', price: 40, inStock: false },
        { product: 'Shoes', price: 60, inStock: true },
        { product: 'Hat', price: 15, inStock: true }
    ];

    for (let item of inventory) {
        if (item.product === `Pants`) {
            for (let prop in item) {
                showOutput(`${prop}: ${item[prop]}`)
            }
            item.inStock = true;
            item.price = item.price * 0.8

            showOutput(`\nAfter Update`)
            for (let prop in item) {
                showOutput(`New ${prop}: ${item[prop]}`)
            }
        }
    }
}

function compareObjects() {
    clearOutput()

    let obj1 = { a: 1, b: 2, c: 3 };
    let obj2 = { a: 1, b: 2, c: 3 };
    let obj3 = { a: 1, b: 2, c: 4 };

    
    function objectEqual(obja, objb) {
        let keysA = 0
        let keysB = 0

        for (let key in obja) keysA++
        for (let key in objb) keysB++

        if (keysA !== keysB) {
            return false
        }

        for (let key in obja) {
            if (obja[key] !== objb[key]) {
                return false
            }
        }
        return true
    }
    showOutput(`obj1 vs obj2. Is it the same? ${objectEqual(obj1, obj2) ? `Yes` : `No`}`)
    showOutput(`obj1 vs obj3. Is it the same? ${objectEqual(obj1, obj3) ? `Yes` : `No`}`)
}

function countPropertyTypes() {
    clearOutput()

    let mixed = {
        name: 'John',
        age: 30,
        isStudent: false,
        scores: [85, 92, 78],
        address: {
            city: 'Boston',
            zip: 12345
        },
        greet: function() { return 'Hello'; }
    };

    let counts = {
        string: 0,
        number: 0,
        boolean: 0,
        object: 0,
        array: 0,
        function: 0
    }

    for (let key in mixed) {
        let value = mixed[key]
        let type = typeof value

        showOutput(`${key}: ${type} (${value})`)

        if (Array.isArray(value)) {
            counts.array++
        } 
        else if (type === `object` && value !== null) {
            counts.object++
        }
        else if (type === `string`) counts.string++
        else if (type === `number`) counts.number++
        else if (type === `boolean`) counts.boolean++
        else if (type === `function`) counts.function++

        for (let type in counts) {
            showOutput(`${type}: ${counts[type]}`)
        }
    }
}

function matrixLoop() {
    clearOutput()

    let matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    let rowIndex = 0
    for (let key of matrix) {
        colIndex = 0
        for (let num of key) {
            showOutput(`Row ${rowIndex}, Col ${colIndex}: ${num}`)
            colIndex++
        }
        rowIndex++
    }
}

function wordFrequency() {
    clearOutput()

    let sentence = `the cat and the dog and the bird and the cat`
    let words = sentence.split(` `)
    let frequency = {}

    for (let word of words) {
        let wordFreq = ``
        for (let pos in word) {
            wordFrequency += frequency[word]
        }
        showOutput(wordFreq)
    }
}