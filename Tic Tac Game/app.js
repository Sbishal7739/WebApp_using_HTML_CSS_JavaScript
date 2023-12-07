let btns = document.querySelectorAll('.box');
let reset = document.querySelector('.reset');
let newGameBtn = document.querySelector('.new-game');
let msg = document.querySelector('#msg');
let msgContainer = document.querySelector('.msg-container');

let turnX = true;

let winningPossibilities = [[0, 1, 2], [3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7], [2, 5, 8], [0, 4, 8],[2, 4, 6],]

btns.forEach((box) =>{
    box.addEventListener('click', () => {
        if(turnX){
            box.innerText = 'X';
            turnX = false;
        }else{
            box.innerText = 'O';
            box.style.color = "red"
            turnX = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

function resetGame(){
    turnX = true;
    enableBoxes();
    msgContainer.classList.add('hide');
}

function enableBoxes() {
    btns.forEach((box) =>{
        box.disabled = false;
        box.innerHTML = "";
        box.style.color = ""
    })
}

function disabledBoxes() {
    btns.forEach((box) => {
        box.disabled = true;
    })
}

function showWinner(winner) {
    msg.innerText = `Congratulations The winner: ${winner}`
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

function checkWinner(){
    winningPossibilities.forEach((element) =>{
        console.log(btns[element[0]].innerText, btns[element[1]].innerText, btns[element[2]].innerText);
        let position1val = btns[element[0]].innerText;
        let position2val = btns[element[1]].innerText;
        let position3val = btns[element[2]].innerText;

        if(position1val != "" && position2val != "" && position3val != ""){
            if(position1val == position2val && position2val == position3val){
                console.log("win", position1val);
                showWinner(position1val);
            }
        }
    })
}

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);