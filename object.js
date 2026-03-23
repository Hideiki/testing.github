const output = document.getElementById(`output`)

function showOutput(message) {
    output.innerHTML += message + `<br>`
}

function clearOutput() {
    output.innerHTML = ""
}

function createMyObject() {
    clearOutput()
    const person = {
        name: "Mark Anthony",
        age: 21, 
        hobby: "many hobbies",
        favoriteFood: "Siomai"
    }
    showOutput(`=== MY OBJECTS ===\n`)
    showOutput(`My name is ${person.name}. I'm ${person.age} and my hobby? 
        I have too ${person.hobby}. but my favorite food is ${person.favoriteFood}`)
}

function accessCarProperties() {
    clearOutput()

    const car = {
        brand: "Toyota",
        model: "Corolla",
        year: 2020,
        color: "blue",
        price: 20000
    }
    showOutput(`=== ACCESSING OBJECT PROPERTIES ===\n`)
    showOutput(`The car brand is ${car.brand} with model of ${car[`model`]}. Launched in the Philippines in August 20, ${car.year}.
        It has many colors including ${car[`color`]}. The car costs $${car.price}`)
}

function addBookProperties() {
    clearOutput()

    let book = {
        title: `The Hobbit`,
        author: `J.R.R Tolkien`
    }
    book.year = 1937
    book.pages = 310
    book.genre = `Fantasy`

    showOutput(`=== ADD PROPERTIES ===\n`)
    showOutput(`The title of the book is ${book.title}. It wrote by ${book[`author`]}. He published it in year ${book.year} with ${book.pages} pages, and a genre of ${book.genre}`)
}

function updateStudent() {
    clearOutput()
    const student = {
        name: "Jia Demi",
        grade: 85,
        subject: "English",
        passed: false
    }
    student.grade = 95
    student.passed = true
    student.subject = "Science"

    showOutput(`=== UPDATING PROPERTIES ===\n`)
    showOutput(`The student name is ${student.name} with a grade of ${student.grade}. Her favorite subject is ${student.subject} and did she pass? ${student.passed}`)
}   

function createMovieObject() {
    clearOutput()
    const movie = {
        title: "Inception",
        year: 2010,
        ratings: [8.8, 9.0, 7.5],
        details: {
            director: "Nolan",
            duration: 148
        }
    }
    showOutput(`=== CREATE ANOTHER OBJECT INSIDE ===\n`)
    showOutput(`The title of the movie is ${movie.title} in year ${movie.year}. Directed by ${movie.details.director} with a duration of ${movie.details.duration} minutes,
        with a ratings of ${movie.ratings.join(`, `)}.`)
}

function loopThroughPhone() {
    clearOutput()

    const phone = {
        brand: "Samsung",
        model: "Galaxy S21",
        price: 799,
        color: "black",
        inStock: true
    }
    showOutput(`=== PHONE PROPERTIES ===\n`)
    for (let [models, value] of Object.entries(phone)) {
        showOutput(`${models}: ${value}`)
    }
}

function createDogObject() {
    clearOutput()

    const dog = {
        name: `Bruno`,
        breed: `Corgi`,
        age: 5,
        bark: function () {
            return `Woof! My name is ${this.name}`
        }
    }
    showOutput(`=== DOG BARK ===\n`)
    showOutput(`${dog.bark()}`)
}

function compareObjects() {
    clearOutput()

    let person1 = {
        name: "Sam",
        age: 25,
        city: "Boston"
    }

    let person2 = {
        name: "Sam",
        age: 25,
        city: "Boston"
    }

    let person3 = {
        name: "Alex",
        age: 30,
        city: "Miami"
    }

    function areaObjects(obj1, obj2) {
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false
        }

        for (let key in obj1) {
            if (obj1[key] !== obj2[key]) {
                return false
            }
        }

        return true
    }

    showOutput(`=== COMPARING OBJECTS ===\n`)
    showOutput(`Person 1 vs Person 2: ${areaObjects(person1, person2) ? `SAME` : `DIFFERENT`}`)
    showOutput(`Person 1 vs Person 3: ${areaObjects(person1, person3) ? `SAME` : `DIFFERENT`}`)
}

function createMovieList() {
    clearOutput()

    const movie = [{
        title: "Spiderman",
        year: 2020,
        rating: 9.8
    }, {
        title: "Superman",
        year: 2010,
        rating: 8.8
    }, {
        title: "Avengers",
        year:  2024,
        rating: 10
    }]

    for (let i = 0; i < movie.length; i++) {
        showOutput(`${movie[i].title} — year ${movie[i].year} and rating ${movie[i].rating}`)
    }
}

function findProduct () {
    clearOutput()

    const products = [{
        name: `Laptop`,
        price: 999,
        inStock: true
    }, {
        name: "Mouse",
        price: 25,
        inStock: false
    }, {
        name: "Keyboard",
        price: 75, 
        inStock: true
    }, {
        name: "Monitor",
        price: 300,
        inStock: true
    }];

    let search = prompt(`Enter product name to search:`).toLowerCase()
    let found = null

    for (let i = 0; i < products.length; i++) {
        if (products[i].name.toLowerCase() === search) {
            found = products[i]
            break
        }
    }

    if (found) {
        showOutput(`=== PRODUCT FOUND ===\n`)
        showOutput(`Name: ${found.name}`)
        showOutput(`Price: $${found.price}`)
        showOutput(`In Stock: ${found.inStock ? "Yes" : "No"}`)
    } else {
        showOutput(`❌ Product "${search}" not found`)
    }
}

function shoppingCartBonus() {
    clearOutput()

    let cart = {
        items: [],
        total: 0,

        addItem: function(name, price) {
            this.items.push({
                name: name, 
                price: price
            })
            this.total += price
            showOutput(`Added: ${name} - $${price}`)
        },

        showCart: function() {
            showOutput(`\n=== CART CONTENTS ===`)
            if (this.items.length === 0) {
                showOutput(`Cart is empty`)
            } else {
                for (let i = 0; i < this.items.length; i++) {
                    showOutput(`${(i + 1)}. ${this.items[i].name} - $${this.items[i].price}`)
                }
                showOutput(`Total: $${this.total}`)
            }
        },

        removeItem: function(index) {
            if (index >= 0 && index < this.items.length) {
                let removed = this.items[index]
                this.total -= removed.price
                this.items.splice(index, 1)
                showOutput(`Removed: ${removed.name}`)
            }
        }
    }
    showOutput(`=== SHOPPING CART ===\n`)
    showOutput(`${cart.addItem(`Shirt`, 25)}`)
    showOutput(`${cart.addItem(`Pants`, 40)}`)
    showOutput(`${cart.addItem(`Shoes`, 65)}`)
    showOutput(`${cart.showCart()}`)
    showOutput(`${cart.removeItem(1)}`)
    showOutput(`${cart.showCart()}`)
}