const message = document.getElementById(`message`)
const reset = document.getElementById(`reset`)
const boxes = []
for (let i = 1; i <= 9; i++) {
    boxes.push(document.getElementById(`box${i}`))
}

let treasureBox = Math.floor(Math.random() * 9) + 1
let gameOver = false

 boxes.forEach((box, index) => {
    box.addEventListener(`click`, function() {
        if (gameOver) return
        if (box.classList.contains(`opened`)) return

        const boxNumber = index + 1;

        if (boxNumber === treasureBox) {
            box.innerHTML = "💰";
            box.classList.add('opened');
            message.innerHTML = "🎉 YOU FOUND THE TREASURE! YOU WIN! 🎉";
            message.style.color = "white";
            gameOver = true;
        } else {
            box.innerHTML = `❌`
            box.classList.add(`opened`)
            message.innerHTML = `No treasure here. Keep trying!`
            message.style.color = `red`
        }
    })
 })

 reset.addEventListener(`click`, function() {
    boxes.forEach(box => {
        box.innerHTML = ``
        box.classList.remove(`opened`)
    }) 

    treasureBox = Math.floor(Math.random() * 9) + 1
    gameOver = false
    message.innerHTML = ``
 })