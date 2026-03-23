const output = document.getElementById(`output`)

function showOutput(message) {
    output.innerHTML += message + `<br>`
}

function clearOutput() {
    output.innerHTML = ""
}

function testBookConstructor() {
    clearOutput()

    function Book(title, author) {
        this.title = title
        this.author = author
    }
    const book1 = new Book(`Harry Potter`, `J.K Rowling`)
    const book2 = new Book(`Percy Jackson`, `Rick Riordan`)

    showOutput(`=== BOOK CONSTRUCTOR ===\n`)
    showOutput(`${book1.title} - ${book1.author}`)
    showOutput(`${book2.title} - ${book2.author}`)
}

function testMovieConstructor() {
    clearOutput()

    function Movie(title, year, director) {
        this.title = title;
        this.year = year;
        this.director = director;
        this.description = function() {
            showOutput(`${this.title}/${this.year} directed by ${this.director}`)
        }
    }
    const movie1 = new Movie(`Spiderman`, 2020, `Mark Anthony`)

    showOutput(`=== MOVIE CONSTRUCTOR ===\n`)
    showOutput(`Movie name: ${movie1.title}. Year: ${movie1.year}. Directed by: ${movie1.director}`)
    movie1.description()
}

function testStudentClass() {
    clearOutput()

    class Student{
        constructor(name, grade) {
            this.name = name
            this.grade = grade
        }
        isPassing() {
            return this.grade >= 75;
        } 
    }
    let student1 = new Student(`Mark Anthony`, 70)
    let student2 = new Student(`Jia Demi`, 95)

    showOutput(`=== STUDENT CLASS ===\n`)
    showOutput(`${student1.name} - ${student1.grade}`)
    showOutput(`Is he passed? ${student1.isPassing() ? `Yes` : `No`}\n`)
    showOutput(`${student2.name} - ${student2.grade}`)
    showOutput(`Is she passed? ${student2.isPassing() ? `Yes` : `No`}`)
}

function testCalculatorClass() {
    clearOutput()

    class Calculator {
        constructor() {
        }
        add(a, b) {
            return a + b;
        }
        substract(a, b) {
            return a - b;
        }
        multiply(a, b) {
            return a * b;
        }
        divide(a, b) {
            if (b !== 0) {
                return a / b;
            } else {
                return `Cannot divide by zero!`
            }
        }
    }
    const calculator = new Calculator()
    
    showOutput(`=== CALCULATOR CLASS ===\n`)
    showOutput(`1 + 2 = ${calculator.add(1, 2)}`)
    showOutput(`2 - 1 = ${calculator.substract(2, 1)}`)
    showOutput(`23 x 11 = ${calculator.multiply(23, 11)}`)
    showOutput(`23 / 11 = ${calculator.divide(23, 11).toFixed(2)}`)
}

function testBankAccount() {
    clearOutput()

    class BankAccount {
        constructor(accountHolder, initialBalance) {
            this.accountHolder = accountHolder
            this.balance = initialBalance
        }
        deposit(amount) {
            if (amount > 0) {
            this.balance += amount
            return `Deposited: $${amount}. New Balance: $${this.balance}`
            } else {
                return `Invalid amount`
            }
        }
        withdraw(amount) {
            if (amount > 0 && amount <= this.balance) {
                this.balance -= amount
                return `Withdraw: $${amount}. New Balance: $${this.balance}`
            } else if (amount > this.balance) {
                return `Insufficient funds! You have $${this.balance}`
            } else {
                return `Invalid amount`
            }
        }
        checkBalance() {
            return `Current balance: $${this.balance}`
        }
    }
    let account = new BankAccount(`John`, 3000)

    showOutput(`=== BANK ACCOUNT CLASS ===\n`)
    showOutput(`Account Holder: ${account.accountHolder}`)
    showOutput(account.checkBalance())
    showOutput(account.deposit(2000))
    showOutput(account.withdraw(3000))
    showOutput(account.withdraw(5000))
}

function testProductClass() {
    clearOutput()

    class Product {
        constructor(name, price, category) {
            this.name = name;
            this.price = price;
            this.category = category;
        };
        discount(percent) {
            let discountAmount = this.price * (percent / 100);
            return this.price - discountAmount;
        };
        getInfo() {
            return `Product: ${this.name}, ${this.price} - ${this.category}`;
        };
    };

    let laptop = new Product(`Laptop`, 1000, `Electronics`);
    let book = new Product(`Javascript Guide`, 45, `Books`);

    showOutput(`=== PRODUCT CLASS ===\n`);
    showOutput(laptop.getInfo());
    showOutput(`20& discount: $${laptop.discount(20)}`);
    showOutput(``);
    showOutput(book.getInfo());
    showOutput(`50% discount: $${book.discount(50)}`);
};

function testDogClass() {
    clearOutput()

    class Dog {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        bark() {
            return `Woof! I'm ${this.name}`
        }
        humanYears() {
            return this.age * 7
        }
        info() {
            return `${this.name} is ${this.age} dog years old (${this.humanYears()} human years)`
        }
    }
    let dog = new Dog(`Bruno`, 5)

    showOutput(`=== DOG CLASS ===\n`)
    showOutput(dog.bark())
    showOutput(dog.humanYears())
    showOutput(dog.info())
}

function testPlaylistClass() {
    clearOutput()

    class Playlist {
        constructor(playlistName) {
            this.name = playlistName;
            this.songs = []
        }
        addSong(title, artist) {
            this.songs.push({title, artist})
            return `Added: ${title} by ${artist}`
        }
        removeSong(title) {
            let index = this.songs.findIndex(song => song.title === title)
            if (index !== -1) {
                let removed = this.songs.splice(index, 1)[0]
                return `Removed: ${removed.title}`
            }
            return `Song not found`
        }
        listSongs() {
            if (this.songs.length === 0) {
                return `No songs in playlist`
            }
            let list = `Playlist: ${this.name}\n`
            for (let i = 0; i < this.songs.length; i++) {
                list += `${(i + 1)}: ${this.songs[i].title} - ${this.songs[i].artist}\n`
            }
            return list
        }
        totalSongs() {
            return this.songs.length
        }
    }
    let playlist = new Playlist(`Sweet Jia`)

    showOutput(`=== PLAYLIST CLASS ===\n`)
    showOutput(playlist.addSong(`Marilag`, `Dionela`))
    showOutput(playlist.addSong(`Best Part`, `Daniel Caesar`))
    showOutput(playlist.addSong(`Inner Child`, `Toneejay`))
    showOutput(playlist.addSong(`Mahirap na`, `Ex Batallion`))
    showOutput(``)
    showOutput(playlist.listSongs())
    showOutput(`Total songs: ${playlist.totalSongs()}`)
    showOutput(``)
    showOutput(playlist.removeSong(`Mahirap na`))
    showOutput(``)
    showOutput(playlist.listSongs())
}

function testRectangleClass() {
    clearOutput()

    class Rectangle {
        constructor(width, height) {
            this.width = width
            this.height = height
        }
        area() {
            return this.width * this.height
        }
        perimeter() {
            return 2 * (this.width + this.height)
        }
        isSquare() {
            if (this.width === this.height) {
                return `Yes`
            }
            return `Sadly, no`
        }
        info() {
            return `Rectangle ${this.width} x ${this.height}`
        }
    }
    let rectangle = new Rectangle(50, 20)
    
    showOutput(`=== RECTANGLE CLASS ===\n`)
    showOutput(rectangle.info())
    showOutput(`Rectangle Area: ${rectangle.area()}`)
    showOutput(`Rectangle Perimeter: ${rectangle.perimeter()}`)
    showOutput(`Is it square? ${rectangle.isSquare()}`)
}

function testGradeTracker() {
    clearOutput()

    class GradeTracker {
        constructor(name) {
            this.name = name;
            this.hasGrades = []
        }
        addGrade(grade) {
            if (grade >= 0 && grade <= 100) {
                this.hasGrades.push(grade)
                return `Added grade: ${grade}`
            }
            return `Invalid grade (0-100)`
        }
        getAverage() {
            if (this.hasGrades.length === 0) return 0
            let sum = 0
            for (let i = 0; i < this.hasGrades.length; i++) {
                sum += this.hasGrades[i]
            }
            return sum / this.hasGrades.length
        }
        getHighest() {
            if (this.hasGrades.length === 0) return 0
            let highest = this.hasGrades[0]
            for (let i = 0; i < this.hasGrades.length; i++) {
                if (this.hasGrades[i] > highest) highest = this.hasGrades[i]
            }
            return highest
        }
        getLowest() {
            if (this.hasGrades.length === 0) return 0
            let lowest = this.hasGrades[0]
            for (let i = 1; i < this.hasGrades.length; i++) {
                if (this.hasGrades[i] < lowest) lowest = this.hasGrades[i]
            }
            return lowest
        }
        getLetterGrade() {
            let avg = this.getAverage()
             if (avg >= 90) return "A";
            if (avg >= 80) return "B";
            if (avg >= 70) return "C";
            if (avg >= 60) return "D";
            return "F";
        }
        report() {
            return `Student: ${this.name}\nGrades: ${this.hasGrades.join(`, `)}\nAverage: ${this.getAverage().toFixed(1)}\nHighest: ${this.getHighest()}\nLowest: ${this.getLowest()}\nLetter Grade: ${this.getLetterGrade()}`
        }
    }
    let tracker = new GradeTracker(`Jia`)

    showOutput(`=== STUDENT GRADE TRACKER CLASS ===\n`)
    showOutput(tracker.addGrade(96))
    showOutput(tracker.addGrade(91))
    showOutput(tracker.addGrade(93))
    showOutput(tracker.addGrade(94))
    showOutput(tracker.addGrade(89))
    showOutput(``)
    showOutput(tracker.report())
}

function testTodoList() {
    clearOutput()

    class ToDoList {
        constructor(ownername) {
            this.name = ownername
            this.task = []
        }
        addTask(text) {
            this.task.push({text, completed: false})
            return `Added: ${text}`
        }
        completeTask(index) {
            if (index >= 0 && index < this.task.length) {
                this.task[index].completed = true
                return ` ✅ Completed: ${this.task[index].text}`
            }
            return `Invalid task number` 
        }
        removeTask(index) {
            if (index >= 0 && index < this.task.length) {
                let removed = this.task.splice(index, 1)[0]
                return `Removed: ${removed.text}`
            }
            return `Invalid task number`
        }
        listAll() {
            if (this.task.length === 0) return `No tasks`

            let list = `TODO List ${this.name}\n`
            for (let i = 0; i < this.task.length; i++) {
                let status = this.task[i].completed ? `✅` : `❌`
                list += `${(i + 1)}. ${status} ${this.task[i].text}\n`
            }
            return list
        }
        listPending() {
            let pending = this.task.filter(task => !task.completed)
            if (pending.length === 0) return `No pending task`

            let list = `PENDING LIST\n`
            for (let i = 0; i < pending.length; i++) {
                list += `o ${pending[i].text}\n`
            }
            return list
        }
        listCompleted() {
            let completed = this.task.filter(task => task.completed)
            if (completed.length === 0) return `No completed task`

            let list = `COMPLETED TASKS\n`
            for (let i = 0; i < completed.length; i++) {
                list += `✅ ${completed[i].text}\n`
            }
            return list
        }
        getProgress() {
            let total = this.task.length;
            let completed = this.task.filter(task => task.completed).length
            let percent = total === 0 ? 0 : Math.round((completed / total) * 100);
            return `${completed} / ${total} task completed (${percent}%)`
        }
    }
    let myTodo = new ToDoList(`Jia Demi`)

    showOutput(`=== TODO LIST CLASS ===\n`)
    showOutput(myTodo.addTask(`Learn Javascript`))
    showOutput(myTodo.addTask(`Practice classes`))
    showOutput(myTodo.addTask(`Build a project`))
    showOutput(myTodo.addTask(`Take a break`))
    showOutput(``)
    showOutput(myTodo.listAll())
    showOutput(``)
    showOutput(myTodo.completeTask(0))
    showOutput(myTodo.completeTask(2))
    showOutput(``)
    showOutput(myTodo.listAll())
    showOutput(``)
    showOutput(myTodo.listPending())
    showOutput(``)
    showOutput(myTodo.listCompleted())
    showOutput(``)
    showOutput(`Progress: ${myTodo.getProgress()}`)
}