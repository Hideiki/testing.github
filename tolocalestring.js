function showOutput(elementId, message) {
    document.getElementById(elementId).innerHTML = message
}

document.getElementById(`btn1`).addEventListener(`click`, () => {
    // Format for:
    // 1. USA (en-US)
    // 2. Germany (de-DE)
    // 3. India (en-IN)
    // 4. Japan (ja-JP)
    
    // Expected:
    // USA: 1,234,567.89
    // Germany: 1.234.567,89
    // India: 12,34,567.89
    // Japan: 1,234,567.89
    const number = 1234567.89;    
    showOutput(`out1`, `US: ${number.toLocaleString(`en-US`)}<br>Germany: ${number.toLocaleString(`de-DE`)}<br>India: ${number.toLocaleString(`en-IN`)}<br>Japan: ${number.toLocaleString(`ja-JP`)}`)
})

document.getElementById(`btn2`).addEventListener(`click`, () => {
     let amount = 1234.56;
    
    // Format as:
    // 1. US Dollars (USD)
    // 2. Euros (EUR)
    // 3. Japanese Yen (JPY) - no decimals
    // 4. Philippine Pesos (PHP)
    // 5. British Pounds (GBP)
    
    // Expected:
    // USD: $1,234.56
    // EUR: €1,234.56
    // JPY: ¥1,235 (rounded)
    // PHP: ₱1,234.56
    // GBP: £1,234.56
    showOutput(`out2`, `USD: ${amount.toLocaleString(`en-US`, {style: `currency`, currency: `USD`})}<br>
                        EUR: ${amount.toLocaleString(`de-DE`, {style: `currency`, currency: `EUR`})}<br>
                        JPY: ${amount.toLocaleString(`ja-JP`, {style: `currency`, currency: `JPY`})}<br>
                        PHP: ${amount.toLocaleString(`en-PH`, {style: `currency`, currency: `PHP`})}<br>
                        GBP: ${amount.toLocaleString(`en-US`, {style: `currency`, currency: `GBP`})}`)
})

document.getElementById(`btn3`).addEventListener(`click`, () => {
    let scores = [
        { student: 'Alice', score: 0.85 },
        { student: 'Bob', score: 0.92 },
        { student: 'Charlie', score: 0.78 },
        { student: 'Diana', score: 0.99 }
    ];
    
    // Display each student's score as a percentage
    // Use 1 decimal place for percentages
    // Expected: "Alice: 85.0%", etc.
    let output = ``
    scores.forEach(s => {
        const percent = s.score.toLocaleString(`en-US`, {style: `percent`, minimumFractionDigits: 1, maximumFractionDigits: 1,})
        output += `<span class="highlight">${s.student}</span>: ${percent}<br>`
    })
    showOutput(`out3`, output)
})

document.getElementById(`btn4`).addEventListener(`click`, () => {
    let date = new Date('2024-12-25T15:30:00');
    
    // Format this date for:
    // 1. USA (en-US)
    // 2. UK (en-GB)
    // 3. Germany (de-DE)
    // 4. Japan (ja-JP)
    // 5. China (zh-CN)
    
    // Use options to show full date and time
    showOutput(`out4`, `<span class="highlight">USA</span>: ${date.toLocaleString(`en-US`)}<br><span class="highlight">UK</span>: ${date.toLocaleString(`en-GB`)}<br><span class="highlight">Germany</span>: ${date.toLocaleString(`de-DE`)}<br><span class="highlight">Japan</span>: ${date.toLocaleString(`ja-JP`)}<br><span class="highlight">China</span>: ${date.toLocaleString(`zh-CN`)}`)
})

document.getElementById(`btn5`).addEventListener(`click`, () => {
    let cart = [
        { item: 'Laptop', price: 999.99, quantity: 1 },
        { item: 'Mouse', price: 24.99, quantity: 2 },
        { item: 'Keyboard', price: 79.99, quantity: 1 },
        { item: 'USB Cable', price: 9.99, quantity: 3 }
    ];
    
    // Calculate total
    // Display the total in:
    // 1. US Dollars
    // 2. Euros
    // 3. Japanese Yen (no decimals)
    // 4. Your local currency
    
    // Also show each item with its currency format
    let output = ``
    let total = 0
    cart.forEach(c => {
        let subtotal = c.price * c.quantity
        total += subtotal
        output += `${c.item} x${c.quantity} : ${subtotal.toLocaleString(`en-US`, {style: `currency`, currency: `USD`})}`
        output += `<br>-----------<br>`
        output += `USD total: ${total.toLocaleString(`en-US`, {style: `currency`, currency: `USD`})}<br>`
        output += `EUR total: ${total.toLocaleString(`de-DE`, {style: `currency`, currency: `EUR`})}<br>`
        output += `JPY total: ${total.toLocaleString(`ja-JP`, {style: `currency`, currency: `JPY`})}<br>`
        output += `PHP total: ${total.toLocaleString(`en-PH`, {style: `currency`, currency: `PHP`})}<br>`
        output += `<br>-----------<br>`
    })
    showOutput(`out5`, output)
})

document.getElementById(`btnBonus`).addEventListener(`click`, () => {
    let measurements = [
        { value: 25.4, unit: 'kilometer',  locale: 'en-US' },
        { value: 98.6, unit: 'fahrenheit',  locale: 'en-US' },
        { value: 75, unit: 'kilogram',  locale: 'de-DE' },
        { value: 2.5, unit: 'liter',  locale: 'en-GB' }
    ];
    
    // Format each measurement with its unit
    // Use different locales to see how units change
    // For length: 'kilometer', temperature: 'fahrenheit', etc.
    let output = ``

    measurements.forEach(m => {
        const formatted = m.value.toLocaleString(m.locale, {style: `unit`, unit: m.unit, unitDisplay: `long`})
        output += `${m.locale} : ${formatted}<br>`
    })
    output += `<br><span class="inline-code">unit</span>`
    showOutput(`outBonus`, output)
})