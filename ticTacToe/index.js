console.log('tic tac toe');

let music = new Audio('music.mp3')
let turnAudio = new Audio("ting.mp3")
let gameOver = new Audio('gameover.mp3');
let resetMusic  =  new Audio('reset.mp3')

let turn = "X";

let isgameover = false;

let changeTurn = () => {
    return turn === "X" ? "O" : "X"
}

// functionto chek a win
chekWin = () => {
    let boxText = document.getElementsByClassName('boxText')
    let wins = [
        [0, 1, 2 , 5 ,4.5 , 0],
        [3, 4, 5 , 5 ,14.5, 0],
        [6, 7, 8 , 5 ,24.5, 0],
        [0, 3, 6 , -5,15, 90],
        [1, 4, 7 , 5 ,15, 90],
        [2, 5, 8 , 15,15, 90],
        [0, 4, 8 , 5 ,15, 45],
        [2, 4, 6 , 5 ,15,135]

    ]
    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " won"
            isgameover = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = ' 200px';
            let x= window.matchMedia("screen and (max-width: 800px)")
            document.querySelector('.line').style.width = '20vw'
            document.querySelector('.line').style.transform = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`
            
        }
    })
}

// game logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            turnAudio.play();
            chekWin();
            if (!isgameover) {
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })
})

reset.addEventListener('click', () => {
    let boxTexts = document.querySelectorAll('.boxText');
    Array.from(boxTexts).forEach(element => {
        element.innerText = "";
    })
    resetMusic.play();
    turn = "X";
    isgameover = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = ' 0px';
    document.querySelector('.line').style.width = '0vw'
    


})
