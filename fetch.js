
async function getRandomQuote() {
    const output = document.getElementById(`out1`)
    output.innerHTML = `<span class="loading">⏳ Fetching a random quote...</span>`

    try {
        const response = await fetch('https://thequoteshub.com/api/')

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        output.innerHTML = `
                    <div class="quote-text">💬 "${data.text}"</div>
                    <div class="quote-author">— ${data.author}</div>`;
    }
    catch(error) {
        output.innerHTML =  `<span class="error">❌ Failed to fetch quote: ${error.message}</span>`;
    }
}

document.getElementById(`btn1`).addEventListener(`click`, getRandomQuote)

 // 1. Fetch from https://dog.ceo/api/breeds/image/random
    // 2. Get the image URL from response.message
    // 3. Create an <img> element and set its src
    // 4. Add it to the page
    // 5. Handle errors

async function randomDog() {
    const output = document.getElementById(`out2`)
    output.innerHTML = `<span class="loading">⏳ Fetching a random dog...</span>`

    try {
        const response = await fetch(`https://dog.ceo/api/breeds/image/random`)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        console.log(data)

        output.innerHTML = `
                    <img class="dog-image" src="${data.message}" alt="Random Dog">
                    <div style="margin-top: 0.5rem; font-size: 0.75rem; color: #94a3b8;">🐕 Woof!</div>`
    }
    catch(error) {
        output.innerHTML = `<span class="error">❌ Failed to fetch quote: ${error.message}</span>`
    }
}

document.getElementById(`btn2`).addEventListener(`click`, randomDog)


 // 1. Fetch from https://www.boredapi.com/api/activity/
    // 2. Display the activity text
    // 3. Show how many participants
    // 4. Show type (education, relaxation, etc.)
    // 5. Handle errors
async function randomActivity() {
    const output = document.getElementById(`out3`)
    output.innerHTML = `<span class="loading">⏳ Fetching a random activity...</span>`

    try {
        const response = await fetch('https://mdinfotech.net/api/activity/');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        console.log(data)

        output.innerHTML = `<div style="font-size: 1.1rem; margin-bottom: 0.8rem;">🎯 ${data.activity}</div>
                    <div>👥 Participants: ${data.participants}</div>
                    <div>💰 Price: ${data.cost}</div>
                    <div class="activity-type">📂 Type: ${data.type}</div>`
    }
    catch(error) {
        output.innerHTML = `<span class="error">❌ Failed to fetch quote: ${error.message}</span>`
    }
}

document.getElementById(`btn3`).addEventListener(`click`, randomActivity)


async function randomJoke() {
    const output = document.getElementById(`out4`)
    output.innerHTML = `<span class="loading">⏳ Fetching a random joke...</span>`

    try {
        const response = await fetch(`https://v2.jokeapi.dev/joke/Any?type=single`)

        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        console.log(data)

        output.innerHTML = `<div style="font-size: 1.1rem; margin-bottom: 0.8rem;">${data.joke}</div>
                            <div class="activity-type">📂 Category: ${data.category}</div>`
    }
    catch(error) {
        output.innerHTML = `<span class="error">❌ Failed to fetch quote: ${error.message}</span>`
    }
}
document.getElementById(`btn4`).addEventListener(`click`, randomJoke)

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

async function numberFact() {
    const output = document.getElementById(`out5`)
    output.innerHTML = `<span class="loading">⏳ Fetching random d jokes...</span>`
    await delay(2000)

    try {
        const response = await fetch(`./jokes.json`)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        const random = data.jokes[Math.floor(Math.random() * data.jokes.length)]
        
        output.innerHTML = `<div style="font-size: 1.1rem; margin-bottom: 0.8rem;">${random}</div>`

    }
    catch(error) {
        output.innerHTML = `<span class="error">❌ Failed to fetch quote: ${error}</span>`
    }
}
document.getElementById(`btn5`).addEventListener(`click`, numberFact)

 // 1. Ask user for a city name
    // 2. Fetch from https://goweather.herokuapp.com/weather/{city}
    // 3. Display temperature, wind, and description
    // 4. Handle errors (if city not found)


async function getWeather() {
    const output = document.getElementById(`outBonus`)
    output.innerHTML = `<span class="loading">⏳ Getting the city data...</span>`

    try {
        const latitude = prompt(`Enter the latitude:`)
        const longitude = prompt(`Enter the longitude:`)
    
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto`

        const response = await fetch(url)

        if(!response.ok) {
            throw new Error(`Failed to fetch weather data!`)
        }

        const data = await response.json()

        const current = data.current_weather
        const daily = data.daily

        output.innerHTML = `<div style="font-size: 1.1rem; margin-bottom: 0.8rem;">Temperature: ${current.temperature}°C</div>
                            <div>Windspeed: ${current.windspeed} km/h</div>`
    }
    catch(error) {
        output.innerHTML = `<span class="error">❌ Failed to fetch quote: ${error}</span>`
    }
}

document.getElementById(`btnBonus`).addEventListener(`click`, getWeather)