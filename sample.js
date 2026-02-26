        let currentRoom = 1;
        let gameOver = false;
        let gameWon = false;
        
        // Get DOM elements
        const storyElement = document.getElementById('story');
        const statusElement = document.getElementById('status');
        const choice1 = document.getElementById('choice1');
        const choice2 = document.getElementById('choice2');
        const choice3 = document.getElementById('choice3');
        
        // ===========================================
        // UPDATE DISPLAY FUNCTION
        // ===========================================
        function updateDisplay() {
            if (gameOver) {
                // Disable all buttons
                choice1.disabled = true;
                choice2.disabled = true;
                choice3.disabled = true;
                
                if (gameWon) {
                    statusElement.innerHTML = "🎉 VICTORY! You escaped the forest! 🎉";
                } else {
                    statusElement.innerHTML = "💀 GAME OVER... Try again? 💀";
                }
                return;
            }
            
            // Enable buttons
            choice1.disabled = false;
            choice2.disabled = false;
            choice3.disabled = false;
            
            // Update story and button text based on current room
            if (currentRoom === 1) {
                storyElement.innerHTML = "🌳 You are in a dark forest.<br><br>" +
                                        "Three paths lie before you...";
                choice1.textContent = "🌲 Take LEFT path";
                choice2.textContent = "🌿 Take MIDDLE path";
                choice3.textContent = "🌴 Take RIGHT path";
                statusElement.innerHTML = "📍 Room 1: The Forest";
            }
            else if (currentRoom === 2) {
                storyElement.innerHTML = "🕯️ You enter a dark cave.<br><br>" +
                                        "You hear growling in the darkness...";
                choice1.textContent = "🔥 Light a torch";
                choice2.textContent = "🏃 Run back to forest";
                choice3.textContent = "👋 Call out 'Hello?'";
                statusElement.innerHTML = "📍 Room 2: The Cave";
            }
            else if (currentRoom === 3) {
                storyElement.innerHTML = "🏞️ You follow a gentle river.<br><br>" +
                                        "You see an old boat tied to a tree.";
                choice1.textContent = "🚣 Take the boat";
                choice2.textContent = "🏊 Swim across";
                choice3.textContent = "🚶 Follow river on foot";
                statusElement.innerHTML = "📍 Room 3: The River";
            }
        }
        
        // ===========================================
        // HANDLE CHOICE FUNCTION (called by buttons)
        // ===========================================
        function handleChoice(choiceNum) {
            if (gameOver) {
                alert("Game is over! Click RESTART to play again.");
                return;
            }
            
            // ===========================================
            // THE WHILE LOOP IS HERE!
            // We use a while loop to process the choice
            // ===========================================
            let processing = true;
            
            while (processing) {
                // Process based on current room
                if (currentRoom === 1) {
                    if (choiceNum === 1) {
                        // Go to cave
                        currentRoom = 2;
                        storyElement.innerHTML = "➡️ You take the left path...<br><br>" +
                                                "It leads to a dark cave entrance. You saw bats and other stuff";
                        processing = false;
                    }
                    else if (choiceNum === 2) {
                        // Go to river
                        currentRoom = 3;
                        storyElement.innerHTML = "➡️ You take the middle path...<br><br>" +
                                                "You hear flowing water ahead.";
                        processing = false;
                    }
                    else if (choiceNum === 3) {
                        // Climb tree (special event)
                        storyElement.innerHTML = "🌲 You climb a tall tree.<br><br>" +
                                                "You see a light in the distance!<br>" +
                                                "But now you're back on the ground...";
                        // Stay in room 1
                        processing = false;
                    }
                }
                else if (currentRoom === 2) {
                    if (choiceNum === 1) {
                        // WIN - Light torch
                        storyElement.innerHTML = "🔥 You light a torch!<br><br>" +
                                                "✨ The cave illuminates and you find TREASURE!<br>" +
                                                "🎉 YOU ESCAPED THE FOREST!";
                        gameOver = true;
                        gameWon = true;
                        processing = false;
                    }
                    else if (choiceNum === 2) {
                        // Go back to forest
                        currentRoom = 1;
                        storyElement.innerHTML = "➡️ You run back to the forest entrance...";
                        processing = false;
                    }
                    else if (choiceNum === 3) {
                        // LOSE - Wake bear
                        storyElement.innerHTML = "🐻 Your voice echoes...<br><br>" +
                                                "A massive bear wakes up and charges!<br>" +
                                                "💀 GAME OVER!";
                        gameOver = true;
                        gameWon = false;
                        processing = false;
                    }
                }
                else if (currentRoom === 3) {
                    if (choiceNum === 1) {
                        // WIN - Take boat
                        storyElement.innerHTML = "🚣 The boat floats downstream...<br><br>" +
                                                "✨ You reach a safe village!<br>" +
                                                "🎉 YOU ESCAPED THE FOREST!";
                        gameOver = true;
                        gameWon = true;
                        processing = false;
                    }
                    else if (choiceNum === 2) {
                        // LOSE - Swim
                        storyElement.innerHTML = "🏊 The current is too strong!<br><br>" +
                                                "💀 You're swept away... GAME OVER!";
                        gameOver = true;
                        gameWon = false;
                        processing = false;
                    }
                    else if (choiceNum === 3) {
                        // WIN - Follow river
                        storyElement.innerHTML = "🚶 You follow the river for hours...<br><br>" +
                                                "✨ You find a small village!<br>" +
                                                "🎉 YOU ESCAPED THE FOREST!";
                        gameOver = true;
                        gameWon = true;
                        processing = false;
                    }
                }
                
                // If we processed a choice, exit the while loop
                if (!processing) {
                    break;
                }
            }
            
            // Update the display after processing
            updateDisplay();
            
            // Show final message if game over
            if (gameOver) {
                if (gameWon) {
                    alert("🎉 CONGRATULATIONS! You escaped the forest! 🎉");
                } else {
                    alert("💀 Better luck next time! 💀");
                }
            }
        }
        
        // ===========================================
        // RESTART GAME FUNCTION
        // ===========================================
        function restartGame() {
            currentRoom = 1;
            gameOver = false;
            gameWon = false;
            
            storyElement.innerHTML = "🌳 You find yourself at the forest entrance...<br><br>" +
                                    "The adventure begins anew!";
            
            updateDisplay();
            
            // Enable all buttons
            choice1.disabled = false;
            choice2.disabled = false;
            choice3.disabled = false;
        }
        
        // ===========================================
        // INITIALIZE GAME
        // ===========================================
        updateDisplay();