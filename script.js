let playerScore = 0;
let computerScore = 0;


// Sounds
let clickSound = new Audio("click.wav");
let winSound = new Audio("win.wav");
let loseSound = new Audio("lose.wav");
let drawSound = new Audio("draw.wav");
const names = [
    "🐍 Snake",
    "💧 Water",
    "🔫 Gun"
];
function play(player){
    clickSound.currentTime = 0;
    clickSound.play();
    let computer = Math.floor(Math.random()*3);
    document.getElementById("computer").innerHTML =
    "Computer : " + names[computer];
    let result;
    if(player === computer){
        result = "DRAW 🤝";
        drawSound.currentTime = 0;
        drawSound.play();
    }
    else if(
        (player === 0 && computer === 1) ||
        (player === 1 && computer === 2) ||
        (player === 2 && computer === 0)
    ){
        result = "YOU WIN 🎉";
        playerScore++;
        winSound.currentTime = 0;
        winSound.play();
    }
    else{
        result = "YOU LOSE 😢";
        computerScore++;
        loseSound.currentTime = 0;
        loseSound.play();
    }
    document.getElementById("result").innerHTML = result;
    document.getElementById("score").innerHTML =
    `You : ${playerScore} | Computer : ${computerScore}`;
}
function resetGame(){
    playerScore = 0;
    computerScore = 0;
    document.getElementById("score").innerHTML =
    "You : 0 | Computer : 0";
    document.getElementById("result").innerHTML =
    "Make your move!";
    document.getElementById("computer").innerHTML =
    "Computer : Waiting...";
}