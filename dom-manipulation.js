function showOutput(elementId, message) {
    document.getElementById(elementId).innerHTML = message
}

document.getElementById(`addItemBtn`).addEventListener(`click`, () => {
    // 1. Get the todoList element
    // 2. Create a new <li> element
    // 3. Set its textContent to "New Task"
    // 4. Append it to the todoList
    const newList = document.createElement(`li`)
    newList.textContent = `New Task`
    showOutput(`out1`, document.getElementById(`todoList`).append(newList))
})

document.getElementById(`addFirstBtn`).addEventListener(`click`, () => {
    // 1. Get the ranking list
    // 2. Create a new <li> element
    // 3. Set textContent to "1st Place"
    // 4. Prepend it to the list (add to beginning)
    const newList = document.createElement(`li`)
    newList.textContent = `1st Place`
    showOutput(`out2`, document.getElementById(`ranking`).prepend(newList))
})

document.getElementById(`insertBtn`).addEventListener(`click`, () => {
    // 1. Get the gallery element
    // 2. Get the element to insert before (Photo 3)
    // 3. Create a new <div> with class "photo" and text "Photo 2"
    // 4. Insert it before Photo 3
    const insertPhoto = document.createElement(`div`)
    insertPhoto.textContent = `📷 Photo 2`
    insertPhoto.className = `photo`
    const photo3 = document.getElementById(`photo3`)
    let output = document.getElementById(`gallery`).insertBefore(insertPhoto, photo3)
    showOutput(`out3`, output)
})

document.getElementById(`removeBtn`).addEventListener(`click`, () => {
    // 1. Get the colors list
    // 2. Get the element with class "remove-me"
    // 3. Remove it using removeChild()
    const colors = document.getElementById(`colors`)
    const toRemove = document.querySelector(`#colors .remove-me`)
    if(toRemove) {
        colors.removeChild(toRemove)
        showOutput(`out4`, `✅ Blue has been removed.`)
    } else {
        showOutput(`out4`, `⚠️ Blue is already removed.`)
    }
})

document.getElementById(`createCardBtn`).addEventListener(`click`, () => {
    // Create a div with class "card"
    // Inside:
    //   - h3 with title "Card Title"
    //   - p with content "This is a brand new card created with JavaScript!"
    //   - span with class "badge" and text "New!"
    
    // Add the card to cardContainer
    const container = document.getElementById(`cardContainer`)
    const newCard = document.createElement(`div`)
    newCard.className = `card`
    newCard.style.background = `linear-gradient(145deg, #2d3a5e, #1e2a4a)`
    
    const title = document.createElement(`h3`)
    title.textContent = `✨ Card Title`
    title.style.marginBottom = `0.5rem`

    const paragraph = document.createElement(`p`)
    paragraph.textContent = `This is a brand new card created with JavaScript!`
    paragraph.style.fontSize = `0.85rem`
    paragraph.style.marginBottom = `0.5rem`

    const span = document.createElement(`span`)
    span.className = `badge`
    span.textContent = `New!`

    newCard.appendChild(title).style.color = `#facc15`
    newCard.appendChild(paragraph).style.color = `#cbd5e1`
    newCard.appendChild(span)
    
    container.appendChild(newCard)

    showOutput(`out5`, `✅ New card created and appended to container`)
})

function updateRemoveButtons() {
            // Attach remove event to all remove buttons in shopping list
            document.querySelectorAll('#shoppingList .remove-item').forEach(btn => {
                btn.removeEventListener('click', handleRemove); // avoid duplicates
                btn.addEventListener('click', handleRemove);
            });
        }

        function handleRemove(event) {
            const li = event.target.closest('li');
            if (li && li.parentNode === shoppingList) {
                shoppingList.removeChild(li);
                showMessage('outBonus', '🗑️ Item removed using removeChild');
            }
        }

        const shoppingList = document.getElementById('shoppingList');
        const addShoppingBtn = document.getElementById('addShoppingBtn');
        const newItemInput = document.getElementById('newItemInput');

        addShoppingBtn.addEventListener('click', function() {
            const itemText = newItemInput.value.trim();
            if (itemText === '') {
                alert('Please enter an item');
                return;
            }
            
            // Create new list item
            const li = document.createElement('li');
            li.textContent = itemText;
            
            // Create remove button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.className = 'remove-item';
            
            li.appendChild(removeBtn);
            shoppingList.appendChild(li);
            
            // Clear input
            newItemInput.value = '';
            
            // Update remove button listeners
            removeBtn.addEventListener('click', handleRemove);
            
            showMessage('outBonus', `✅ Added "${itemText}" to shopping list`);
        });

        // Initialize remove buttons for existing items
        updateRemoveButtons();