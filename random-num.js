// script.js

// Main function to generate all three tables
function generateAllTables() {
    // Show loading states
    document.getElementById('table1').innerHTML = '<div class="loading">Generating</div>';
    document.getElementById('table2').innerHTML = '<div class="loading">Generating</div>';
    document.getElementById('table3').innerHTML = '<div class="loading">Generating</div>';
    
    // Remove any existing verification message
    removeVerificationMessage();
    
    // Use setTimeout to prevent UI freezing
    setTimeout(() => {
        // Generate 150 unique numbers for each table
        const table1Numbers = generateUniqueNumbers(150, 100, 999);
        const table2Numbers = generateUniqueNumbers(150, 100, 999);
        const table3Numbers = generateUniqueNumbers(150, 100, 999);
        
        // Display the numbers in tables
        displayNumbers('table1', table1Numbers);
        displayNumbers('table2', table2Numbers);
        displayNumbers('table3', table3Numbers);
        
        // Check for duplicates across all tables
        checkAllTablesForDuplicates();
    }, 100);
}

// Function to generate unique random numbers WITHIN a single table
function generateUniqueNumbers(count, min, max) {
    const numbers = new Set();
    
    while (numbers.size < count) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.add(randomNum);
    }
    
    return Array.from(numbers).sort((a, b) => a - b);
}

// Function to display numbers in a table grid
function displayNumbers(elementId, numbers) {
    const container = document.getElementById(elementId);
    container.innerHTML = '';
    
    numbers.forEach(number => {
        const cell = document.createElement('div');
        cell.className = 'number-cell';
        cell.textContent = number;
        container.appendChild(cell);
    });
}

// NEW FUNCTION: Fix all duplicates across tables
function fixAllDuplicates() {
    // Show fixing in progress message
    showFixingMessage();
    
    // Use setTimeout to allow UI to update and show the fixing process
    setTimeout(() => {
        let iterations = 0;
        const maxIterations = 1000; // Safety limit to prevent infinite loop
        let duplicatesFound = true;
        
        while (duplicatesFound && iterations < maxIterations) {
            iterations++;
            
            // Get current numbers from all tables
            const table1 = getTableNumbers('table1');
            const table2 = getTableNumbers('table2');
            const table3 = getTableNumbers('table3');
            
            // Find all duplicates across tables
            const duplicateAnalysis = analyzeDuplicates(table1, table2, table3);
            
            if (duplicateAnalysis.duplicates.length === 0) {
                duplicatesFound = false;
                break;
            }
            
            // Fix each duplicate by changing one occurrence
            duplicateAnalysis.duplicates.forEach(dup => {
                // Decide which table to modify (prefer tables with more duplicates)
                const tablesToModify = dup.tables.split(', ').map(t => t.trim());
                
                // For each duplicate number, change it in one of the tables
                // We'll change it in all but the first occurrence to preserve at least one
                for (let i = 1; i < tablesToModify.length; i++) {
                    const tableToModify = tablesToModify[i];
                    const currentTableNumbers = getTableNumbers(getTableId(tableToModify));
                    
                    // Generate a new unique number that doesn't exist in ANY table
                    const allNumbers = new Set([...table1, ...table2, ...table3]);
                    const newNumber = generateNumberNotInSet(allNumbers, 100, 999);
                    
                    // Replace the duplicate number with the new one
                    const index = currentTableNumbers.indexOf(dup.number);
                    if (index !== -1) {
                        currentTableNumbers[index] = newNumber;
                    }
                    
                    // Update the table
                    displayNumbers(getTableId(tableToModify), currentTableNumbers.sort((a, b) => a - b));
                }
            });
            
            // Small delay to make the fixing process visible (optional)
            // Remove this if you want it to be instant
            break; // Remove this break if you want to see step-by-step fixing
        }
        
        // Final check and display result
        setTimeout(() => {
            checkAllTablesForDuplicates();
            removeFixingMessage();
            
            // Show success message if no duplicates found
            const finalCheck = analyzeDuplicates(
                getTableNumbers('table1'),
                getTableNumbers('table2'),
                getTableNumbers('table3')
            );
            
            if (finalCheck.duplicates.length === 0) {
                showSuccessMessage('✨ All duplicates have been fixed! All numbers are now unique across all tables! ✨');
            }
        }, 500);
        
    }, 100);
}

// Helper function to generate a number not in a given set
function generateNumberNotInSet(existingNumbers, min, max) {
    let attempts = 0;
    const maxAttempts = 1000;
    let newNumber;
    
    do {
        newNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        attempts++;
        
        // If we've tried too many times, expand the range (shouldn't happen with 100-999 range)
        if (attempts > maxAttempts) {
            console.log('Warning: Could not find unique number, expanding range...');
            return Math.floor(Math.random() * 1000) + 1; // 1-1000 as fallback
        }
    } while (existingNumbers.has(newNumber));
    
    return newNumber;
}

// Helper function to get table numbers as array
function getTableNumbers(tableId) {
    const cells = document.querySelectorAll(`#${tableId} .number-cell`);
    return Array.from(cells).map(cell => parseInt(cell.textContent));
}

// Helper function to get table ID from table name
function getTableId(tableName) {
    switch(tableName) {
        case 'T1': return 'table1';
        case 'T2': return 'table2';
        case 'T3': return 'table3';
        default: return 'table1';
    }
}

// Updated function to check for duplicates across all tables
function checkAllTablesForDuplicates() {
    const table1 = getTableNumbers('table1');
    const table2 = getTableNumbers('table2');
    const table3 = getTableNumbers('table3');
    
    const analysis = analyzeDuplicates(table1, table2, table3);
    
    // Display the verification result
    displayVerificationResult(analysis);
    
    // Log to console
    console.log('=== DUPLICATE CHECK RESULTS ===');
    console.log('Total unique numbers across all tables:', analysis.uniqueCount);
    console.log('Total numbers (including duplicates):', analysis.totalNumbers);
    console.log('Number of duplicates found:', analysis.duplicates.length);
    
    if (analysis.duplicates.length > 0) {
        console.log('Duplicate numbers:');
        analysis.duplicates.forEach(d => {
            console.log(`  ${d.number} appears in tables: ${d.tables}`);
        });
    } else {
        console.log('No duplicates found across tables! ✓');
    }
}

// NEW FUNCTION: Analyze duplicates and return detailed info
function analyzeDuplicates(table1, table2, table3) {
    const numberMap = new Map();
    
    function addNumbersToMap(numbers, tableName) {
        numbers.forEach(num => {
            if (!numberMap.has(num)) {
                numberMap.set(num, []);
            }
            numberMap.get(num).push(tableName);
        });
    }
    
    addNumbersToMap(table1, 'T1');
    addNumbersToMap(table2, 'T2');
    addNumbersToMap(table3, 'T3');
    
    const duplicates = [];
    numberMap.forEach((tables, number) => {
        if (tables.length > 1) {
            duplicates.push({
                number: number,
                tables: tables.join(', ')
            });
        }
    });
    
    return {
        numberMap: numberMap,
        duplicates: duplicates,
        uniqueCount: numberMap.size,
        totalNumbers: table1.length + table2.length + table3.length
    };
}

// Updated function to display verification result
function displayVerificationResult(analysis) {
    removeVerificationMessage();
    
    const verificationDiv = document.createElement('div');
    verificationDiv.id = 'verification-message';
    verificationDiv.style.marginTop = '20px';
    verificationDiv.style.padding = '15px';
    verificationDiv.style.borderRadius = '8px';
    verificationDiv.style.textAlign = 'center';
    verificationDiv.style.fontWeight = 'bold';
    verificationDiv.style.fontSize = '16px';
    
    if (analysis.duplicates.length > 0) {
        verificationDiv.style.backgroundColor = '#f8d7da';
        verificationDiv.style.color = '#721c24';
        verificationDiv.style.border = '1px solid #f5c6cb';
        
        let message = `⚠️ FOUND SIMILAR NUMBERS! (${analysis.duplicates.length} duplicate`;
        message += analysis.duplicates.length > 1 ? 's' : '';
        message += ' found)<br><br>';
        
        // Show fix button
        message += `<button onclick="fixAllDuplicates()" class="fix-btn" style="margin-bottom: 15px;">🔧 Fix All Duplicates</button><br>`;
        
        // List duplicates
        const displayDuplicates = analysis.duplicates.slice(0, 5);
        message += '<div style="font-size: 14px; font-weight: normal; max-height: 150px; overflow-y: auto;">';
        displayDuplicates.forEach(d => {
            message += `• Number ${d.number} appears in ${d.tables}<br>`;
        });
        if (analysis.duplicates.length > 5) {
            message += `• ... and ${analysis.duplicates.length - 5} more<br>`;
        }
        message += '</div>';
        
        verificationDiv.innerHTML = message;
    } else {
        verificationDiv.style.backgroundColor = '#d4edda';
        verificationDiv.style.color = '#155724';
        verificationDiv.style.border = '1px solid #c3e6cb';
        verificationDiv.innerHTML = '✅ NO SIMILAR NUMBERS FOUND! All numbers are unique across all tables.';
    }
    
    document.querySelector('.container').appendChild(verificationDiv);
}

// Helper functions for messages
function showFixingMessage() {
    removeFixingMessage();
    const fixingDiv = document.createElement('div');
    fixingDiv.id = 'fixing-message';
    fixingDiv.style.marginTop = '10px';
    fixingDiv.style.padding = '10px';
    fixingDiv.style.backgroundColor = '#cce5ff';
    fixingDiv.style.color = '#004085';
    fixingDiv.style.border = '1px solid #b8daff';
    fixingDiv.style.borderRadius = '8px';
    fixingDiv.style.textAlign = 'center';
    fixingDiv.style.fontWeight = 'bold';
    fixingDiv.innerHTML = '🔄 Fixing duplicates... Please wait... 🔄';
    document.querySelector('.container').appendChild(fixingDiv);
}

function removeFixingMessage() {
    const existingMessage = document.getElementById('fixing-message');
    if (existingMessage) {
        existingMessage.remove();
    }
}

function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.id = 'success-message';
    successDiv.style.marginTop = '10px';
    successDiv.style.padding = '10px';
    successDiv.style.backgroundColor = '#d4edda';
    successDiv.style.color = '#155724';
    successDiv.style.border = '1px solid #c3e6cb';
    successDiv.style.borderRadius = '8px';
    successDiv.style.textAlign = 'center';
    successDiv.style.fontWeight = 'bold';
    successDiv.style.animation = 'slideDown 0.5s ease-out';
    successDiv.innerHTML = message;
    
    // Remove after 3 seconds
    document.querySelector('.container').appendChild(successDiv);
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}

function removeVerificationMessage() {
    const existingMessage = document.getElementById('verification-message');
    if (existingMessage) {
        existingMessage.remove();
    }
}

// Updated verify function
function verifyCurrentTables() {
    checkAllTablesForDuplicates();
}

// Initialize tables when page loads
window.onload = function() {
    generateAllTables();
};