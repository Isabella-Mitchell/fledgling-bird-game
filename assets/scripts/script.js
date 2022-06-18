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

    // Start Game Animation


    // Highlight class for Answer Options

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

    function submitBird() {
        //can remove console log
        //use this to add to completed Birds
        //this can only happen if there is less than or equal to five birds in array - or put this in different function?
        selectedBird = document.getElementsByClassName('highlight');
        console.log("The bird selected is", selectedBird[0].id);
        game.currentBird.push(selectedBird[0].id);
        console.log(game);
        gameRound();
    }

    function checkAnswer(){
        //checks answer submitted against object
        //changes icon to green or red
    }

    function gameRound(){
        console.log('game round begins');
        $("#game-box").fadeOut(1000, function(){
            //for loop to go through questions
            //set template literals for questions
            $("#game-box").html(`
            <div class="container center question-container">
            <div class="row">
                <div class="col-md-4 order-md-2 question-image">
                    <img src="assets/images/Bird-outline-example.png">
                </div>
            
                <div class="col-md-8 order-md-1">
                    <h3>Question Text Blah Blah Blah</h3>
                    <div>
                        <div class="row">
                            <button type="button" class="answer-btn">Option 1</button>
                            <button type="button" class="answer-btn">Option 2</button>
                        </div>
                        <div class="row">
                            <button type="button" class="answer-btn">Option 3</button>
                            <button type="button" class="answer-btn">Option 4</button>
                        </div>
                    </div>
                    <div class="row">
                        <!--should change to event listener-->
                        <button type="button" onclick="submitAnswer()" class="btn btn-primary btn-lg">Submit</button>
                    </div>
                </div>
            </div>
        </div>
                `);
            $("#game-box").fadeIn(1000);
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

    function submitAnswer() {

    }

    
