function countToTen() {
    let result = "👉 Counting from 1 to 10:\n";
    let i = 1;

    while (i <=10) {
        result = result + i + " ";
        i++;
    }
    document.getElementById("output").textContent = result;
}

function sumNumbers() {
    let i = 1
    let sum = 0

    while (i <= 100) {
        sum = sum + i;
        i++
    }
    document.getElementById("output").textContent = `🧮 The sum of 1 to 100 is: ${sum}`;
}

function guessGame() {
    let secretNumber = 7
    let guess
    let attempts = 0
    let message = "🎮 Guessing Game Started!\n"

    while (guess != secretNumber) {
        guess = prompt("Guess a number from 1 to 10:")
        guess = Number(guess)
        attempts++

        if (guess === secretNumber) {
            message = message + `✅ Correct! The number was ${secretNumber}.\n`;
            message = message + `🎯 You got it in ${attempts} attempts!`;
        } else {
            alert(`❌ ${guess} is wrong. Try again!\n`);
            message += `❌ ${guess} is wrong. Try again!\n`
        }
    }
    document.getElementById("output").textContent = message;
}

function atmMenu() {
    let balance = 1000
    let message = "🏧 ATM Machine\n"
    let choice;
    
    do {
        choice = prompt("1. Balance\n2. Deposit\n3. Withdraw\n4. Exit\nChoose option:")

        if (choice === "1") {
            alert(`Your balance is $${balance}`);
        } 
        else if (choice === "2"){
            let deposit = Number(prompt("Deposit amount:"))
            balance += deposit
            alert(`Deposited $${deposit}`);
            message += `$${deposit} deposited. New balance: $${balance}\n`
        } 
        else if (choice === "3") {
            let withdraw = Number(prompt("Withdraw amount:"))
            if (withdraw <= balance) {
                balance -= withdraw
                alert(`Withdrew $${withdraw}`)
                message += `Withdrew: $${withdraw}. New balance: $${balance}\n`
            } 
            else {
                alert("Insufficient Funds!")
            }
        } 
    } while (choice != "4");
    
        message += "\n Thank you for using our ATM! Current balance: $" + balance
        document.getElementById("output").textContent = message
}

function multiplicationTable() {
    let num = Number(prompt("Enter a number for multiplication table:"))
    let i = 1;
    let table = `📊 Multiplication Table for ${num}:\n\n`;

    while (i <= 10) {
        table += `${num} x ${i} = ${num * i}\n`
        i++
    }
    document.getElementById("output").textContent = table
}