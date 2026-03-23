const output = document.getElementById("output-content")

function showOutput(message){
    output.innerHTML += message + "<br>"
}

function clearOutput(){
    output.innerHTML = '► Click any button to start...'
}

function vendingMachine(){
    clearOutput();
    showOutput("🥤=== VENDING MACHINE === ")

    let money = 2.00
    let choice = ""

     // WHILE LOOP HERE
    // Show menu with prices
    // If choice = "A" and money >= 1.50 → success
    // If choice = "B" and money >= 1.25 → success
    // If choice = "C" and money >= 1.00 → success
    // If choice = "X" → exit
    // Else → "Invalid or insufficient funds"
    while(choice !== "X" && choice !== "x"){
        choice = prompt(` === VENDING MACHINE === \n\nYour money: $${money}\n A. Soda - $1.50\nB. Chips - $1.25\nC. Candy - $1.00\n X. Exit\n\nChoose an item:`)
        
        if (choice === "A" || choice === "a"){
            if(money >= 1.50) {
                money -= 1.50
                alert(`✅ Here's your Soda!🥤 Remaining: ${money.toFixed(2)}`)
                showOutput(`✅ Here's your Soda!🥤 Remaining: ${money.toFixed(2)}`)
            } else {
                showOutput(`❌ Not enough money! Soda costs $1.50`)
            }
        } else if (choice === "B" || choice === "b"){
            if (money >= 1.25){
                money -= 1.25
                alert(`✅ Here's your Chips!🍟 Remaining: ${money.toFixed(2)}`)
                showOutput(`✅ Here's your Chips!🍟 Remaining: ${money.toFixed(2)}`)
            } else {
                showOutput(`❌ Not enough money! Chips costs $1.25`)
            }
        } else if (choice === "C" || choice === "c"){
            if (money >= 1.00){
                money -= 1.00
                alert(`✅ Here's your Candy!🍭 Remaining: ${money.toFixed(2)}`)
                showOutput(`✅ Here's your Candy!🍭 Remaining: ${money.toFixed(2)}`)
            } else {
                alert(`❌ Not enough money! Candy costs $1.00`)
                showOutput(`❌ Not enough money! Candy costs $1.00`)
            }
        } else if (choice === "X" || choice === "x"){
            showOutput("👋 Thank you for using the vending machine!")
        } else {
            alert(`❌ Invalid Item!`)
        }
    }
}

function coffeeShop() {
    clearOutput()
    showOutput("☕ === COFFEE SHOP === ")
    let total = 0
    let item = ""

     // WHILE LOOP HERE
    // Ask for item (coffee/tea/sandwich/done)
    // If coffee → total += 3
    // If tea → total += 2.5
    // If sandwich → total += 5
    // If done → exit loop
    // Else → "Not on menu!"
    while (item !== "Done" && item !== "done") {
        item = prompt(" === COFFEE SHOP === \n\nCoffee: $3\nTea: $2.50\nSandwich: $5\nDone - Finish order\n\nEnter item (or done):")

        if (item == "Coffee" || item == "coffee") {
            total += 3
            showOutput("✅ Your Coffee has been added")
        } else if (item == "Tea" || item == "tea") {
            total += 2.5
            showOutput("✅ Your Tea has been added")
        } else if (item == "Sandwich" || item == "sandwich") {
            total += 5
            showOutput("✅ Your Sandwich has been added")
        } else if (item === "Done" || item === "done") {
            showOutput("You have finished ordering. Your total is $" + total.toFixed(2) + ".")
        } else {
            alert("❌ Not on menu!")
        }
    }
}

function movieTicket() {
    clearOutput()
    showOutput("🎬 === MOVIE TICKET === ")

    let movie = prompt("Choose movie:\n1. Paddington 2 (All ages)\n2. Spider-Man: Into the Spider-Verse (13+)\n3. Joker (17+)")
    if (!movie) return
    let age = 0
    let allowed = false

    // WHILE LOOP HERE
    // Ask for age
    // If movie 1 → allowed = true (any age)
    // If movie 2 and age >= 13 → allowed = true
    // If movie 3 and age >= 17 → allowed = true
    // Else → show error message
    while (!allowed && !null) {
        age = prompt("Enter your age:");
        if (!age) break;
        age = Number(age);

        
        if (movie === "1") {
            allowed = true
            alert(" Enjoy your Paddington 2 movie!🐻")
        } else if (movie === "2") {
            if (age > 13) {
                allowed = true
                alert("Enjoy your Spider-Man: Into the Spider-Verse movie!🕷🕸")
            } else {
                alert("You must be 13+ for this movie. You are " + age + ".")
                break
            }
        } else if (movie === "3") {
            if (age > 17){
                allowed = true 
                alert("Enjoy your Joker movie!🤡")
            } else {
                alert("You must be 17+ for this movie. You are " + age + ".")
            }
        } 
    }
}

function luggageCheck() {
    clearOutput()
    showOutput("🧳 === LUGGAGE CHECK === ")
    showOutput("Max 23kg per bag\n")

    let overweightCount = 0
    let bagCount = 0
    let input

    // WHILE LOOP HERE
    // Ask for weight or 'done'
    // If weight > 23 → overweightCount++
    // bagCount++
    while (input !== "done") {
        input = prompt("🧳 === AIRLINE CHECK-IN ===\nMax 23kg per bag\n\nEnter bag weight (kg) or 'done':")
        if (!input || input === "done") break;
        let weight = Number(input)

        if (isNaN(weight) || weight <= 0) {
            alert(`❌ Invalid weight!`)
            continue
        }
        bagCount++

        if (weight > 23) {
            overweightCount++
            showOutput(`⚠️ Bag ${bagCount}: ${weight}kg - OVERWEIGHT! Extra fee applies.`)
        } else {
            showOutput(`✅ Bag ${bagCount}: ${weight}kg - OK`)
        }
    }

    showOutput(`\n Summart: ${bagCount} bags, ${overweightCount} overweight`)
}

function tipCalculator() {
    clearOutput()
    showOutput(`🍷 Restaurant Tip Calculator`)

    let subtotal = 0
    let cost;
    let itemCount = 0

    while (cost !== "done") {
        cost = prompt(` === RESTAURANT BILL === \n\nEnter meal cost or 'done' (${itemCount} items so far):`)

        if(!cost || cost === "done") break;
        
        let amount = Number(cost)

        if (isNaN(amount) || amount <= 0) {
            alert(`❌ Invalid Amount`)
            continue
        }

        subtotal += amount;
        itemCount++
        showOutput(`✅ Added $${amount.toFixed(2)}`)
    }
    showOutput(`\nSubtotal: $${subtotal.toFixed(2)}`)
    let tipPercent = Number(prompt("Tip percentage:"))

    if (isNaN(tipPercent) || tipPercent < 0) {
        tipPercent = 15;
        showOutput(`⚠️ Invalid percentage, using 15%`)
    }

    let tip = subtotal * (tipPercent / 100)
    let total = subtotal + tip

    showOutput(`💰 Tip (${tipPercent}%): $${tip.toFixed(2)}`)
    showOutput(`💵 Total: $${total.toFixed(2)}`)
    showOutput(`👋 Thank you for dining with us!`)
}

function changePin() {
    clearOutput()
    showOutput("🔒 === CHANGE PIN === ")
    let currentPin = "1234"
    let enterPin
    let verified = false

    while (!verified) {
        enterPin = prompt(" === CHANGE PIN === \n\nEnter your current pin:")
        if(!enterPin) return
        
        if (enterPin === currentPin) {
            verified = true
            alert(`✅ Current PIN verified!`)
        } else {
            alert(`❌ Incorrect PIN!`)
        }
    }
    let newPin;
    let confirmPin;
    let match = false

    while (!match) {
        newPin = prompt("Enter new PIN (4 digits):")

        if(!newPin) return;

        if (newPin.length !== 4 || isNaN(newPin)) {
            alert(`❌ PIN must be 4 digits `)
            continue
        }
        
        confirmPin = prompt("Confirm new PIN:") 

        if (confirmPin === newPin) {
            match = true
            currentPin = newPin
            alert(`✅ PIN successfully changed`)
            showOutput(`✅ PIN successfully changed`)
        } else {
            alert(`❌ PIN doesn't match! Try again`)
        }
    }
}  