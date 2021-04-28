
var dice = ["images/dice-one.png", "images/dice-two.png", "images/dice-three.png", "images/dice-four.png", "images/dice-five.png", "images/dice-six.png"]

var dice1 = document.getElementById("dice1");
var dice2 = document.getElementById("dice2");
var result = document.getElementById("result")

function rollDice() {
    let number = Math.floor(Math.random() * 5) + 1;
    return number;
}

function getDice(number) {
    return dice[number];
}

function game() {

    var player1 = rollDice();
    var player2 = rollDice();
    dice1.setAttribute("src", getDice(player1)); 
    dice2.setAttribute("src", getDice(player2));
    let score;
    if (player1 > player2) {
        score = "Player 1 wins!";
    }
    else if (player1 < player2) {
        score = "Player 2 wins!";
    }
    else {
        score = "It's a tie! Play again.";
    }
    result.innerHTML = score;
}








