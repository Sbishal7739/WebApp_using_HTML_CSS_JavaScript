let time = 60
let score = 0
let randomNumber = 0

function increseScore() {
    score += 10
    document.getElementById('scoreValue').textContent = score
}
function getNewHit() {
    randomNumber = Math.floor(Math.random() * 10) 
    document.getElementById('hit-value').textContent = randomNumber
}
function makeBubble() {
    let bubble = ""

    for (let i = 0; i < 70; i++) {
        bubble += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`
    }

    document.getElementById('pannel-bottom').innerHTML = bubble
}
function runTimer() {
    let timer = setInterval(function () {
        if (time != 0) {
            time--
            document.getElementById('time').innerText = time
        }
        else {
            document.getElementById('pannel-bottom').innerHTML = `<h1>Game over</h1>`
            clearInterval(timer)
        }
    }, 1000)
}
document.getElementById('pannel-bottom').addEventListener('click', function (event) {
    let checkNumber = parseInt(event.target.textContent.trim())
    if (randomNumber === checkNumber) {
        increseScore()
        makeBubble()
        getNewHit()
    }
})
runTimer()

makeBubble()

getNewHit()
// increseScore()
