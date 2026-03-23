function weeklyAllowance() {
    let totalSpent = 0

    for (let i = 1; i <= 4; i++) {
        let spent = Number(prompt(`Week ${i}: How much did you spend?`))

        if (isNaN(spent) || spent < 0) {
            alert(`Week ${i}: Invalid amount, skipping...`)
            continue;
        }
        totalSpent += spent
        alert(`Week ${i}: $${spent.toFixed(2)}`)
    }
    let average = totalSpent / 4
    alert(`Total spent: $${totalSpent}\nAverage per week: $${average.toFixed(2)}`)
}

function groceryList() {
    let items = ["milk", "bread", "eggs", "cheese", "apples"]
    let total = 0

    for (let i = 0; i < items.length; i++) {
        let price;

        while (true) {
            price = Number(prompt(`Item 1 (${items[i]}):`))

            if (!isNaN(price) && price > 0) {
                break;
            }
            alert(`Invalid amount! Try again`)
        }
        total += price
    }
    alert(`Total groceries: $${total.toFixed(2)}`)
}

function stepCounter() {
    let totalSteps = 0;
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    for (let i = 0; i < days.length; i++) {
        let steps = Number(prompt(`${days[i]} steps:`))
        totalSteps += steps
    }
    let average = totalSteps / 7;
    alert(`Total steps: ${totalSteps.toLocaleString()}\nAverage Steps: ${Math.round(average).toLocaleString()}`)
}

function billSplit() {
    let total = 0
    let people = 5

    for (let i = 1; i <= people; i++) {
        let cost = Number(prompt(`Friend ${i} meal:`))
        total += cost
    }
    let eachPays = total / people
    alert(`Total bill: $${total.toFixed(2)}\nEach person pays: $${eachPays.toFixed(2)}`)
}

function examAverage() {
    let total = 0
    let exams = 6

    for (let i = 1; i <= exams; i++) {
        let score = Number(prompt(`Exam ${i} score:`))
        total += score
    }
    let average = total / exams

    if (average >= 90) {
        alert(`Average: ${average.toFixed(1)}\nGrade: A`)
    } else if (average >= 80) {
        alert(`Average: ${average.toFixed(1)}\nGrade: B`)
    } else if (average >= 70) {
        alert(`Average: ${average}\nGrade: C`)
    } else if (average >= 60) {
        alert(`Average: ${average}\nGrade: D`)
    } else if (average < 60) {
        alert(`Average: ${average}\nBelow 60: F`)
    } 
}

function workoutTracker() {
    let total = 0
    let best = 0
    let bestSet = 0
    let reps;

    for (let i = 1; i <= 3; i++) {
        reps = Number(prompt(`Set ${i} reps:`))
        total += reps

        if (reps > best) {
            best = reps 
            bestSet = i
        }
    }
    alert(`Total reps: ${total}\nBest set is ${bestSet} with ${reps} reps`)
}

function monthlyBills() {
    let bills = ["Rent", "Electricity", "Internet", "Phone"]
    let totalBills = 0
    let highest = {
        name: "", amount: 0
    }

    for (let i = 0; i < bills.length; i++) {
        let amount = Number(prompt(`${bills[i]} amount:`))

        totalBills += amount

        if (amount > highest.amount) {
            highest.amount = amount;
            highest.name = bills[i]
        }
    }
    alert(`Total bills: $${totalBills.toFixed(2)}`)
    alert(`Highest bills: ${highest.name} ($${highest.amount.toFixed(2)})`)
}

function temperatureConverter() {
    let day = 5
    let fahrenheit;

    for (i = 1; i <= day; i++) {
        let celsius = Number(prompt(`Day ${i} °C:`))
        alert(`${celsius}°C = ${(celsius * 9 / 5) + 32}°F`)
    }
}

function piggyBank() {
    let total = 0

    for (let i = 1; i <= 10; i++) {
        let addCoins = Number(prompt(`Day ${i}: Add coincs ($)`))
        total += addCoins;
    }
    let average = total / 10
    alert(`Total saved: $${total.toFixed(2)}\nAverage per day: $${average.toFixed(2)}`)
}

function passwordGenerator() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    for (let i = 1; i <= 5; i++) {
        let password = "";

        for (let j = 1; j <= 8; j++) {
            let randonIndex = Math.floor(Math.random() * chars.length)
            password += chars[randonIndex]
        }
        alert(`Password ${i}: ${password}`)
    }
}

function coffeeShopOrders() {
    let grandTotal = 0
    let customers = 3
 
    for (let i = 1; i <= customers; i++) {
        let customerTotal = 0
        let more = true

        alert(`Customer ${i} - start ordering`)

        while (more) {
            let item = prompt(`Enter item name ("or done")`)
            if (item === "done") break;

            let price = Number(prompt(`Price for ${item}:`))
            customerTotal += price;
        }
        alert(`Customer ${i} total: $${customerTotal.toFixed(2)}`)
        grandTotal += customerTotal;
    }
    alert(`Grand Total: $${grandTotal.toFixed(2)}`)
}