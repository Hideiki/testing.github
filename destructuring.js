function showOutput(elementId, message) {
    document.getElementById(elementId).innerHTML = message
}

document.getElementById(`btn1`).addEventListener(`click`, () => {
     let colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    
    // Destructure to get:
    // - firstColor (first item)
    // - secondColor (second item)
    // - thirdColor (third item)
    // - remainingColors (rest of items)
    
    // Print: "First: red, Second: blue, Third: green, Rest: yellow,purple"
    const [firstColor, secondColor, thirdColor, ...remainingColors] = colors

    showOutput(`out1`, `First: ${firstColor}, Second: ${secondColor}, Third: ${thirdColor}, Rest: ${remainingColors.join(`, `)}`)
})

document.getElementById(`btn2`).addEventListener(`click`, () => {
    let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
    
    // Destructure to get:
    // - first fruit
    // - third fruit (skip second)
    // - fifth fruit (skip fourth)
    
    // Print: "First: apple, Third: cherry, Fifth: elderberry"
    const [firstFruit, ,thirdFruit, ,fifthFruit] = fruits

    showOutput(`out2`, `First: ${firstFruit}, Third: ${thirdFruit}, Fifth: ${fifthFruit}`)
})

document.getElementById(`btn3`).addEventListener(`click`, () => {
    let user = {
        name: 'John Doe',
        age: 30,
        email: 'john@example.com',
        city: 'New York',
        country: 'USA'
    };
    
    // Destructure to get name, age, email
    // Print: "Name: John Doe, Age: 30, Email: john@example.com"
    const {name, age, email} = user

    showOutput(`out3`, `Name: ${name}, Age: ${age}, Email: ${email}`)
})

document.getElementById(`btn4`).addEventListener(`click`, () => {
    let person = {
        name: 'Alice',
        age: 25
        // No city or job properties
    };
    
    // Destructure with default values:
    // - name (from object)
    // - age (from object)
    // - city (default: 'Unknown')
    // - job (default: 'Unemployed')
    
    // Print: "Name: Alice, Age: 25, City: Unknown, Job: Unemployed"
    const {name, age, city=`Unknown`, job=`Unemployed`} = person

    showOutput(`out4`, `Name: ${name}, Age: ${age}, City: ${city}, Job: ${job}`)
})

document.getElementById(`btn5`).addEventListener(`click`, () => {
     let data = {
        user: {
            name: 'Bob',
            address: {
                city: 'Los Angeles',
                zip: '90210'
            }
        },
        scores: [85, 92, 78, 95],
        settings: {
            theme: 'dark',
            notifications: true
        }
    };
    
    // Destructure to get:
    // - userName (from user.name)
    // - userCity (from user.address.city)
    // - firstScore (first item in scores)
    // - lastScore (last item in scores)
    // - theme (from settings)
    
    // Print: "Name: Bob, City: Los Angeles, First Score: 85, Last Score: 95, Theme: dark"
    const {user: {name}, user: {address: {city}}, scores: [firstItem, , , lastItem], settings: {theme}} = data
    
    showOutput(`out5`, `Username: ${name}, City: ${city}, First Score: ${firstItem}, Last Score: ${lastItem}, Theme: ${theme}`)
})

document.getElementById(`btnBonus`).addEventListener(`click`, () => {
     let a = 10;
    let b = 20;
    
    [a, b] = [b, a]

    showOutput(`outBonus`, `After: a = ${a}, b = ${b}`)
}) 