//pseudocode approach
//computer selects random number
//crystals are assigned random number
//event listeners wait for click
//counter adds the click according to random number
//function determines if counter === crystals assigned random number for win
//if counter is greater than random numbers then lose
//reset chooses new random numbers

//this is the random number the computer will choose
var computerRandom = Math.floor(Math.random() * 101) + 19;

$("#cRandom").text(computerRandom);


//variables to hold the random numbers for each crystal
var crys1 = Math.floor(Math.random() * 11) + 1;
var crys2 = Math.floor(Math.random() * 11) + 1;
var crys3 = Math.floor(Math.random() * 11) + 1;
var crys4 = Math.floor(Math.random() * 11) + 1;


var userTotal = 0;
//this is the variable that will calculate the user score

var wins = 0;
var losses = 0;

//global event listeners coded here

$("#cyrstal1").on("click", function () {
    userTotal = userTotal + crys1;
    console.log("This is the new user total" + userTotal);
    //prearing conditional statement
    $("#comparative").text(userTotal);
    if (userTotal === computerRandom) {
        youWin();
    }
    else if (userTotal > computerRandom) {
        youLose();
    }
});
$("#cyrstal2").on("click", function () {
    userTotal = userTotal + crys2;
    console.log("This is the new user total" + userTotal);
    //prearing conditional statement
    $("#comparative").text(userTotal);
    if (userTotal === computerRandom) {
        youWin();
    }
    else if (userTotal > computerRandom) {
        youLose();
    }
});

$("#cyrstal3").on("click", function () {
    userTotal = userTotal + crys3;
    console.log("This is the new user total" + userTotal);
    //prearing conditional statement
    $("#comparative").text(userTotal);
    if (userTotal === computerRandom) {
        youWin();
    }
    else if (userTotal > computerRandom) {
        youLose();
    }
});

$("#cyrstal4").on("click", function () {
    userTotal = userTotal + crys4;
    console.log("This is the new user total" + userTotal);
    //prearing conditional statement
    $("#comparative").text(userTotal);
    if (userTotal === computerRandom) {
        youWin();
    }
    else if (userTotal > computerRandom) {
        youLose();
    }
});

//calculate score functions
function youLose() {
    losses++;
    $("#numberLosses").text(losses);
    $("#determine").text("Sorry about that. Looks like you've lost");
    resetGame();
}

function youWin() {
    wins++;
    $("#numberWins").text(wins)
    $("#determine").text("You've won! Great job.");
    resetGame();
}

function resetGame() {
    userTotal = 0;

    var computerRandom = Math.floor(Math.random() * 101) + 19;
    console.log("Looks like the game just reset. Here's the new computer choice" + computerRandom);

    $("#cRandom").text(computerRandom);

    var crys1 = Math.floor(Math.random() * 11) + 1;
    var crys2 = Math.floor(Math.random() * 11) + 1;
    var crys3 = Math.floor(Math.random() * 11) + 1;
    var crys4 = Math.floor(Math.random() * 11) + 1;

}

