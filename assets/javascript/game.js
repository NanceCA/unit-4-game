var crystal1 = 0;
var crystal2 = 0;
var cystal3 = 0;
var crystal4 = 0;

// may not need these variables if I can tag them by their ID
//function start game

var gameSelection = 10;
// $("#display2User").text(gameSelection);

//this initial function displays random numbers
startGame();
function startGame() {
    //get element by ID that is the header and display a random number 
    displayRandom = Math.floor(Math.random() * 120) + 1;
    console.log(displayRandom);
    $("#display2User").text(gameSelection);

    var counter = 0;
    var crystalcounter1 = 2;

    $("#crystal1").on("click", function () {
        counter += crystalcounter1;

        // Clicking the button triggers an alert message.
        alert("You clicked a crystal" + counter + "times!");

    });





    //assign random numbers to the crystals
    //call function that ensures the addition



    function sumNumbers() {
        //onclick add 



    };
};