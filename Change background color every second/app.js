function randomColor() {
    const hexaNUmber = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hexaNUmber[Math.floor(Math.random() * 16)]
    }
    return color
}

let intervel

const startChangingColor = function(){
    if(!intervel){
        intervel = setInterval(changeBgColor,1000)
    }
}

const stopChangingColor = function(){
    clearInterval(intervel)    
    intervel = null
}

const changeBgColor = function () {
    document.body.style.backgroundColor = randomColor()
}

console.log(intervel);


document.getElementById('start').addEventListener('click', startChangingColor)

document.getElementById('stop').addEventListener('click', stopChangingColor)