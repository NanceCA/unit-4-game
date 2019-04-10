//pseudocode approach
//computer selects random number
//crystals are assigned random number
//event listeners wait for click
//counter adds the click according to random number
//function determines if counter === crystals assigned random number for win
//if counter is greater than random numbers then lose
//reset chooses new random numbers

//define initial variables
var crystal1 = 0;
var crystal2 = 0;
var cystal3 = 0;
var crystal4 = 0;
var userScore1 = 0;
var userScore2 = 0;
var userScore3 = 0;
var userScore4 = 0;

//function start game

//this initial function displays random numbers
var userScore = 0;

startGame();

function startGame() {
    var counter = 0;

    displayRandom = Math.floor(Math.random() * 120) + 1;
    console.log(displayRandom);
    $("#display2User").text(displayRandom); //get element by ID that the user will try to play against

    //I am repeating myself, how can I be more efficient?
    var crystalcounter1 = Math.floor(Math.random() * 120) + 19;
    console.log(crystalcounter1);

    var crystalcounter2 = Math.floor(Math.random() * 120) + 19;
    console.log(crystalcounter2)

    var crystalcounter3 = Math.floor(Math.random() * 120) + 19;
    console.log(crystalcounter3)

    var crystalcounter4 = Math.floor(Math.random() * 120) + 19;
    console.log(crystalcounter4)

    var crys1 = $(".crystalimage").on("click", function () {
        counter += crystalcounter1;
        return userScore1;

    });

    var crys2 = $("#crystal2").on("click", function () {
        counter += crystalcounter2;
        return userScore2;
    });

    userScore = crys1 + crys2;
    $("#userScore").text(userScore); // Clicking the button writes the score to the DOM
    console.log("the total userscore is" + userScore);

};