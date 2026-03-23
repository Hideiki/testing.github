function showOutput(elementId, message) {
    document.getElementById(elementId).innerHTML = message
}

function testChallenge1() {
    let person = {
        firstName: 'Alice',
        lastName: 'Johnson',
        // Add a getter called 'fullName' that returns firstName + ' ' + lastName
        get fullName() {
            return `${this.firstName} ${this.lastName}`
        }
    };

    let output = `Full Name: ${person.fullName}<br>First name: ${person.firstName}, Last name: ${person.lastName}`

    showOutput(`output1`, output)
}

function testChallenge2 () {
    let person = {
        firstName: 'Bob',
        lastName: 'Williams',
        // Add a setter called 'fullName' that takes a string like "New Name"
        // Split it into firstName and lastName
        set fullName(name) {
            let parts = name.split(` `)
            this.firstName = parts[0]
            this.lastName = parts[1]
        }
    };

    let output = `Original name: ${person.firstName} ${person.lastName} <br>`
    person.fullName = `Jia Demi`
    output += "New name: " + person.firstName + ' ' + person.lastName

    showOutput(`output2`, output)
}

function testChallenge3() {
    let temperature = {
        _celsius: 25,  // _ means "private" (by convention)
    
        // Getter for fahrenheit: (celsius * 9/5) + 32
        // Setter for fahrenheit: convert to celsius and store
        get fahrenheit() {
            return (this._celsius * 9/5) + 32;
        },

        set fahrenheit(f) {
            this._celsius = (f - 32) * 5 / 9
        }
    };

    let output = `to Fahrenheit = ${temperature.fahrenheit}<br>`
    temperature.fahrenheit = 68
    output += `to Celsius = ${temperature._celsius}`

    showOutput(`output3`, output)
}

function testChallenge4() {
    let user = {
        _age: 25,
    
        // Getter for age (just returns _age)
        // Setter for age: only set if between 1 and 120, otherwise show error

        get age() {
            return this._age
        },

        set age(newAge) {
            if (newAge > 0 && newAge <= 120) {
                this._age = newAge
            } else {
                alert(`❌ Error!!!!`)
            }
        }
    };
    
    user.age = 30
    let output = user.age
    user.age = 200
    output = user.age

    showOutput(`output4`, output)
}

function testChallenge5() {
    let rectangle = {
        _width: 5,
        _height: 3,
    
        // Getters for width and height
        // Setters for width and height (with validation - positive numbers)
        // Getter for area (width * height)
        set width(newWidth) {
            if (typeof newWidth === `number` && newWidth > 0) {
                this._width = newWidth
            } else {
                alert(`❌ You must enter a positive number`)
            }
        },

        set height(newHeight) {
            if (typeof newHeight === `number` && newHeight > 0) {
                this._height = newHeight
            } else {
                alert(`❌ You must enter a positive number`)
            }
        },

        get width() {
            return this._width
        },

        get height() {
            return this._height
        },

        get area() {
            return (this._width * this._height)
        }
    };

    rectangle.width = 23
    rectangle.height = 11

    let output = `Width: ${rectangle.width}, Height: ${rectangle._height}, Area: ${rectangle.area}`

    showOutput(`output5`, output)
}

function testChallenge6() {
    let cartItem = {
        _name: 'Laptop',
        _price: 1000,
        _quantity: 2,
    
        // Getter for total (price * quantity)
        // Setter for quantity (must be positive integer)
        // Setter for price (must be positive)
        get total() {
            return this._price * this._quantity
        },

        set quantity(q) {
            if (q > 0) {
                this._quantity = q
            } else {
                alert(`That's negative number!`)
            }
        },
        
        set price(p) {
            if (p > 0) {
                this._price = p
            } else {
                alert(`That's negative number!`)
            }
        }
    };
    cartItem._price = 2300
    cartItem._quantity = 11

    let output = `${cartItem._name}: $${cartItem._price} (${cartItem._quantity}x)<br> Total = $${cartItem.total}`

    showOutput(`output6`, output)
}

function testChallenge7() {
    let student = {
        _name: 'Emma',
        _grade: 85,
        _subject: 'Math',
        _validator: ``,
    
        // Getter for info that returns "Emma is studying Math and has grade 85"
        // Setter for grade with validation (0-100)
        set grade(value) {
            if (value < 0 || value > 100) {
                console.log("Invalid grade");
                return;
            }
            
            this._grade = value

            if (value > 90) {
                this._validator = `A`
            } else if (value > 80) {
                this._validator = `B`
            } else if (value > 70) {
                this._validator = `C`
            } else if (value < 70) {
                this._validator = `F`
            }
        },

        get info () {
            return `${this._name} is studying ${this._subject} and has grade ${this._grade} (${this._validator})`
        }
    };
    student.grade = student._grade

    let output = `${student.info}`
    showOutput(`output7`, output)
}

function testChallenge8() {
    let bankAccount = {
        _balance: 1000,
    
        // Getter for balance (just returns _balance)
        // Setter for deposit (adds to balance, must be positive)
        // Setter for withdraw (subtracts, must be positive and not exceed balance)
        set deposit(amount) {
            if (typeof amount === `number` && amount > 0) {
                this._balance += amount
            } else {
                alert(`Your number must be positive!`)
            }
        },

        set withdraw(amount) {
            if (typeof amount === `number` && amount > 0 && amount <= this._balance ) {
                this._balance -= amount
            } else {
                alert(`Your number must be positive!`)
            }
        },

        get balance() {
            return this._balance
        },
    };
    let output = `Balance: $${bankAccount.balance}.<br>`
    let depositAmount = 230
    bankAccount.deposit = depositAmount
    output += `Deposited $${depositAmount}. New balance: $${bankAccount._balance}.<br>`
    let withdrawAmount = 1100
    bankAccount.withdraw = withdrawAmount
    output += `Withdrew: $${withdrawAmount}. New balance: $${bankAccount._balance}`

    showOutput(`output8`, output)
}

function testChallenge9 () {
    let counter = {
        _value: 0,
        _max: 10,
        _min: 0,
    
        // Getter for value
        // Setter for value (must stay between min and max)
        // Getter for isAtMax (returns true if value === max)
        // Getter for isAtMin (returns true if value === min)
        set minMax(value) {
            if (value < this._max && value > this._min) this._value = value
            else {alert(`Error!`)}
        },

        get val () {
            return this._value
        },

        get isAtMax() {
            return this._value < this._max
        },

        get isAtMin() {
            return this._value === this._min
        }
    };
    let value = 8
    counter.minMax = value

    let output = `The ${value} is in between min and max.<br>`
    output += `Is ${value} below to Max? ${counter.isAtMax ? `Yes` : `No`}.<br>`
    output += `Is ${value} equal to Min? ${counter.isAtMin ? `Yes` : `No`}.`
    showOutput(`output9`, output)
}

function testChallenge10() {
    let user = {
        _username: 'john123',
        _password: 'secret123', // In real life, never store plain passwords!
    
        // Getter for username
        // Setter for password (must be at least 6 characters)
        // Getter for password (returns "******" instead of actual password)
        set password(pass) {
            if (pass.length >= 6) {
                this._password = pass
            } else {
                alert(`❌ Password must be at least 6 characters.`)
            }
        },

        get username () {
            return this._username
        },

        get password() {
            return `******`
        }
    };
    let output = `Username: ${user.username}<br> Password display: ${user.password}<br><br>`
    user.password = `jiademiyummers123`
    output += `Setting password = "jiademiyummers123"<br>`
    output += `Password display: ${user.password}`

    showOutput(`output10`, output)
}

function testBonus() {
    let circle = {
        _radius: 5,
    
        // Getter for radius
        // Setter for radius (must be positive)
        // Getter for diameter (radius * 2)
        // Getter for circumference (2 * π * radius)
        // Getter for area (π * radius^2)
        get radius () {
            return this._radius
        },

        set radius(value) {
            if (value > 0) {
                this._radius = value
            } else {
                alert(`❌ That's negativ number!`)
            }
        },

        get diameter() {
            return this._radius * 2
        },

        get circumference() {
            return (2 * Math.PI * this._radius)
        },

        get area() {
            return Math.PI * this._radius ** 2
        }
    };
    
    let output = `(CIRCLE) Radius: ${circle._radius}, Diameter: ${circle.diameter}, Circumference: ${circle.circumference.toFixed(2)}, Area: ${circle.area.toFixed(2)}`

    showOutput(`outputBonus`, output)
}