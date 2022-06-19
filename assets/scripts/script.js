// Wait for the DOM to finish loading before running the game
// Content from maths prooject
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("button-command") === "instructions") {
                showInstructions();
            } else if (this.getAttribute("button-command") === "start-new-game")  {
                startNewGame();
            } else if (this.getAttribute("button-command") === "submit-bird")  {
                submitBird();
            } else if (this.getAttribute("button-command") === "submit-answer")  {
                if ($(".highlight-answer-option").text()) {
                    game.submittedTurnAnswer = $(".highlight-answer-option").text();
                    //console.log(game.submittedTurnAnswer);
                    checkAnswer(game.submittedTurnAnswer, game.turnNumber);
                } else {
                    alert("please select an answer");
                }
            } else if (this.getAttribute("button-command") === "start-next-round") {
                startNewRound();
            }
        });
    }

});


// Highlight class for Answer Options

$(".answer-btn").on("click", function() {
    $(".answer-btn").removeClass("highlight-answer-option");
    $(this).addClass("highlight-answer-option");
});


//Game Object

let game = {
    currentBird: [],
    currentBirdObject: [],
    roundNumber: 1,
    score: 0,
    turnNumber: 0,
    submittedTurnAnswer: ""
};

//Global Variables

    let selectedBird;
    let currentBird;
    let currentBirdQuiz;
    let i;

//Functions

function showInstructions() {
    console.log('show instructions');
    //Build Out
}

function showBirdResults() {
    $("#game-box").fadeOut(1000, function(){
        $("#questions-box").addClass("d-none");
        $("#turn-results-box").removeClass("d-none");
        $("#results-text").text("Your score is...");
        $("#game-box").fadeIn(500);
        });
}

function checkAnswer(x, y) {
    //console.log("submit-answer");
    //console.log("The answer options inner text is", x);
    //console.log(game.currentBirdObject[y].correctAnswer)
    if (x === game.currentBirdObject[y].correctAnswer) {
        console.log("You got it right");
    } else {
        console.log("You got it wrong boo");
    };
    game.turnNumber = game.turnNumber + 1
    //console.log(game.turnNumber)
    if (game.turnNumber < 4) {
        gameRound(game.turnNumber)
    } else {
    console.log("That's all folks");
    game.roundNumber = game.roundNumber + 1
    showBirdResults();
    };
    //add changes icon to green or red
}

function gameRound(i){
        console.log('game round begins');
        $(".answer-btn").removeClass("highlight-answer-option");
        $("#game-box").fadeOut(500, function(){
            //could do with splitting out into own function to stop repeating
            $("#bird-collection").addClass("d-none");
            $("#game-info-box").addClass("d-none");
            $("#game-hidden-box").addClass("d-none");
            //console.log("game turn number is", game.turnNumber);
            $("#question-text").text(`${game.currentBirdObject[i].question}`);
            $("#answer-option-1").text(`${game.currentBirdObject[i].options[0]}`);
            $("#answer-option-2").text(`${game.currentBirdObject[i].options[1]}`);
            $("#answer-option-3").text(`${game.currentBirdObject[i].options[2]}`);
            $("#answer-option-4").text(`${game.currentBirdObject[i].options[3]}`);
            $("#questions-box").removeClass("d-none");
            $("#game-hidden-box-1").removeClass("d-none");
            $("#game-box").fadeIn(500);
        });
};

//--- prompted by button run - starts questions ---//

//function run after submitbird button clicked

function submitBird() {
    selectedBird = document.getElementsByClassName('highlight');
    console.log("The bird selected is", selectedBird[0].id);
    game.currentBird.push(selectedBird[0].id);
    currentBird = selectedBird[0].id
    currentBirdQuiz = questionBank[ selectedBird[0].id ];
    game.currentBirdObject = currentBirdQuiz.quiz;
    console.log(game);
    gameRound(game.turnNumber);
    //can remove console log
    //use this to add to completed Birds
    //this can only happen if there is less than or equal to five birds in array - or put this in different function?
    //elimainate option to choose completed bird
}

//--- end of start new round/ bird select sequence---//

// Highlight class for Bird Options

function pickBirdEvent() {
    $(".collection-view").children().addClass("bird-select")
    $(".bird-select").click(function() {
        $(".bird-select").removeClass("highlight");
        $(this).addClass("highlight");
        $("#submit-bird").removeClass("disabled");
    });
}

// Start new round Animation - loads birds

function startNewRound() {
    //console.log("fade-jquery")
    $("#game-box").fadeOut(1000, function(){
        $("#bird-collection").removeClass("d-none");
        $("#game-info-box").removeClass("d-none");
        $("#game-hidden-box-1").addClass("d-none");
        $("#game-info-box").html(
            `<div class="row centered-row">
                <div class="col-12">
                    <p>Round ${game.roundNumber}/5</p>
                </div>
            </div>
            <div class="row centered-row">
                <div class="col-12">
                    <h3>Pick your bird</h3>
                </div>
            </div>`
            );
        $("#game-hidden-box").removeClass("d-none");
        $("#game-box").fadeIn(1000, pickBirdEvent());
    });
    //edit so that completed birds cannot be picked
};

//----end of start game functions---//

//function runs when run new game is called to reset game object

function resetGame() {
    game.currentBird = [];
    game.currentBirdObject = [];
    game.score = 0;
    turnNumber = 0;
    roundNumber = 1;
    submittedTurnAnswer = "";
}

//function runs when run new game is called

function startNewGame() {
    console.log('start new game');
    resetGame();
    startNewRound();
}

//Question Bank

const questionBank = {
    blackBird: {
        outlineImageSrc: "assets/images/Bird-outline-example.png",
        funFact: "This is a male blackbirds. Female blackbirds...",
        quiz: [
            {
                question: "What size is the bird?",
                imageSrc: "assets/images/Bird-outline-example.png",
                options: ["Smaller than 15 cm", "Between 15cm and 30cm", "Between 30cm and 70cm", "Larger than 70cm"],
                correctAnswer: "Between 15cm and 30cm"
            },
            {
                question: "What colour is the bird?",
                imageSrc: "assets/images/Bird-outline-example.png",
                options: ["Black", "White", "Green", "Blue"],
                correctAnswer: "Black"
            },
            {
                question: "Where can you see this bird?",
                imageSrc: "assets/images/Bird-outline-example.png",
                options: ["By or in fresh water", "In the Mountains or Highlands", "In a park or garden", "By the coast"],
                correctAnswer: "In a park or garden"
            },
            {
                question: "What distinctive feature does this bird have?",
                imageSrc: "assets/images/Bird-outline-example.png",
                options: ["A red chest", "A yellow or orange beak", "A spotted back", "Large crest feathers"],
                correctAnswer: "A yellow or orange beak"
            }
        ],
    }
}
