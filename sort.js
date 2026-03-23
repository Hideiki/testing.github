function showOutput(elementId, message) {
    document.getElementById(elementId).innerHTML = message
}

function challenge1() {
    let words = ['dog', 'cat', 'elephant', 'bird', 'ant'];

    // Sort the array alphabetically
    // Print the sorted array
    // Expected: ['ant', 'bird', 'cat', 'dog', 'elephant']
    let output = words.sort()
    showOutput(`output1`, output)
}

function challenge2() {
    let numbers = [42, 3, 15, 8, 23, 1];

    // Sort numbers in ascending order (smallest to largest)
    // Print the sorted array
    // Expected: [1, 3, 8, 15, 23, 42]
    let output = numbers.sort((a, b) => a - b)
    showOutput(`output2`, output)
}

function challenge3() {
    let scores = [85, 92, 78, 95, 88, 76];

    // Sort numbers in descending order (highest to lowest)
    // Print the sorted array
    // Expected: [95, 92, 88, 85, 78, 76]
    let output = scores.sort((a, b) => b - a)
    showOutput(`output3`, output)
}

function challenge4() {
    let animals = ['elephant', 'cat', 'butterfly', 'dog', 'ant'];

    // Sort by length (shortest word first)
    // Print the sorted array
    // Expected: ['ant', 'cat', 'dog', 'elephant', 'butterfly']
    let output = animals.sort((a, b) => a.length - b.length) 
    showOutput(`output4`, output)
}

function challenge5() {
    let people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'Diana', age: 28 }
];

    // Sort people by age (youngest to oldest)
    // Print each person in order
    // Expected: Bob (25), Diana (28), Alice (30), Charlie (35)
    people.sort((a, b) => a.age - b.age);
    let output = people.map(p => `${p.name}(${p.age})`).join(`, `)
    showOutput(`output5`, output)
}

function bonusChallenge() {
    let students = [
    { name: 'Alex', grade: 85 },
    { name: 'Bella', grade: 92 },
    { name: 'Charlie', grade: 85 },
    { name: 'Diana', grade: 92 },
    { name: 'Evan', grade: 78 }
];

    // First sort by grade (highest to lowest)
    // If grades are equal, sort by name alphabetically
    // Expected: Bella (92), Diana (92), Alex (85), Charlie (85), Evan (78)
    students.sort((a, b) => {
        if (a.grade !== b.grade) {
            return b.grade - a.grade
        } else {
            return a.name.localeCompare(b.name)
        }
    })
    let output = students.map(s => `${s.name} (${s.grade})`).join(`, `)
    showOutput(`outputBonus`, output)
    
}