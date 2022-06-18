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
                    checkAnswer();
                }
            });
        }

    });

// From Jquery walkthrough

$(document).ready(function()  {

    // Highlight class for Bird Options

    function pickBirdEvent() {
        $(".collection-view").children().addClass("bird-select")
        $(".bird-select").click(function() {
            $(".bird-select").removeClass("highlight");
            $(this).addClass("highlight");
            $("#submit-bird").removeClass("disabled");
        });
    }

    // Start Game Animation

    $("#start-new-game").on("click", function() {
        console.log("fade-jquery")
        $("#game-box").fadeOut(1000, function(){
            $("#game-info-box").html(
                `<div class="row centered-row">
                    <div class="col-12">
                        <p>Round 1/5</p>
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
    });


    // Highlight class for Answer Options - check not working - I think the issue is that it's a template literal?

    $(".answer-btn").on("click", function() {
        $(".answer-btn").removeClass("highlight");
        $(this).addClass("highlight");
    });


});


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


    let game = {
        currentBird: [],
        currentBirdObject: [],
        gameRound: [],
        score: 0,
        turnNumber: 0
    };

    let selectedBird;

    function resetGame() {
        game.currentBird = [];
        game.playerMoves = [];
        game.score = 0;
        turnNumber = 0;
    }

    function showInstructions() {
        console.log('show instructions');
    }

    function gameTurnListeners(){
        $(".answer-btn").on("click", function() {
            $(".answer-btn").removeClass("highlight");
            $(this).addClass("highlight");
        });
        
    }

    let currentBird;
    let currentBirdQuiz;

    function submitBird() {
        //can remove console log
        //use this to add to completed Birds
        //this can only happen if there is less than or equal to five birds in array - or put this in different function?
        //elimainate option to choose completed bird
        selectedBird = document.getElementsByClassName('highlight');
        console.log("The bird selected is", selectedBird[0].id);
        game.currentBird.push(selectedBird[0].id);
        currentBird = selectedBird[0].id
        currentBirdQuiz = questionBank[ selectedBird[0].id ];
        game.currentBirdObject = currentBirdQuiz.quiz;
        console.log(game);
        gameRound();
    }

    function checkAnswer(){
        //checks answer submitted against object
        //changes icon to green or red
    }

    let i;

    function gameRound(){
        console.log('game round begins');
        $("#game-box").fadeOut(1000, function(){
            $("#bird-collection").addClass("d-none");
            $("#game-info-box").addClass("d-none");
            $("#game-hidden-box").addClass("d-none");
            console.log("game turn number is", game.turnNumber);
            //for loop to go through questions
            //set template literals for questions - should change as much as possible to HTML file so button click things work.
            //maybe not a loop, maybe a function
            for (i = 0; i < 4; i++) {
                    $("#question-text").text(`${game.currentBirdObject[i].question}`);
                    $("#answer-option-1").text(`${game.currentBirdObject[i].options[0]}`);
                    $("#answer-option-2").text(`${game.currentBirdObject[i].options[1]}`);
                    $("#answer-option-3").text(`${game.currentBirdObject[i].options[2]}`);
                    $("#answer-option-4").text(`${game.currentBirdObject[i].options[3]}`);
                    $("#game-hidden-box-1").removeClass("d-none");
                    $("#game-box").fadeIn(1000);

            };
        });
        // for loop - goes through four questions - listens for submit - adds selected to an array - 
        //checkAnswer;
        // at end add one to game round
    };


    function startNewGame() {
        console.log('start new game');
        //resetGame;
        //pickBird;
    }

    function checkAnswer() {
        console.log("submit-answer");
        i++;
        console.log(i);

    }

//end of day - up to answers
