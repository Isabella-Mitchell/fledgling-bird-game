//Question Bank

const Question_Bank = {
    blackbird: {
        birdName: "Blackbird",
        outlineImageSrc: "assets/images/bb-outline.png",
        finishedImageSrc: "assets/images/bb-final.png",
        funFact: "Did you know... Male blackbirds (such as this one) live up to their name but, confusingly, female blackbirds are brown with a yellow-brownish beak",
        quiz: [
            {
                question: "What size is the bird?",
                genre: "size",
                imageSrc: "assets/images/bb-size.png",
                options: ["Smaller than 20 cm", "Between 20cm and 30cm", "Between 30cm and 50cm", "Larger than 50cm"],
                correctAnswer: "Between 20cm and 30cm",
            },
            {
                question: "What colour is the bird?",
                genre: "colour",
                imageSrc: "assets/images/bb-colour.png",
                options: ["Black", "White", "Green", "Blue"],
                correctAnswer: "Black",
            },
            {
                question: "What is the bird doing?",
                genre: "location",
                imageSrc: "assets/images/bb-action.png",
                options: ["Clinging to a tree trunk", "Wading through shallow water", "Feeding on the ground", "Flying in a flock"],
                correctAnswer: "Feeding on the ground",
            },
            {
                question: "What distinctive feature does the bird have?",
                genre: "features",
                imageSrc: "assets/images/bb-feature.png",
                options: ["A red chest", "An orange-yellow beak", "A spotted back", "Large crest feathers"],
                correctAnswer: "An orange-yellow beak",
            },
        ],
    },
    blueTit: {
        birdName: "Blue Tit",
        outlineImageSrc: "assets/images/bt-outline.png",
        finishedImageSrc: "assets/images/bt-final.png",
        funFact: "Did you know... Blue tits are extremely social birds. They can be spotted in flocks of up to 20 strong and are happy to feed alongside other bird species.",
        quiz: [
            {
                question: "What size is the bird?",
                genre: "size",
                imageSrc: "assets/images/bt-size.png",
                options: ["Smaller than 20 cm", "Between 20cm and 30cm", "Between 30cm and 50cm", "Larger than 50cm"],
                correctAnswer: "Smaller than 20 cm",
            },
            {
                question: "What colour is the bird?",
                genre: "colour",
                imageSrc: "assets/images/bt-colour.png",
                options: ["Red, Brown and Yellow", "Brown, Blue and White", "Blue, Green and Yellow", "Red, Grey and Black"],
                correctAnswer: "Blue, Green and Yellow",
            },
            {
                question: "What is the bird doing?",
                genre: "location",
                imageSrc: "assets/images/bt-action.png",
                options: ["Moving through a dense bush", "Building a nest beside water", "Flying high above a field", "Perching on a feeder with a flock"],
                correctAnswer: "Perching on a feeder with a flock",
            },
            {
                question: "What distinctive feature does this bird have?",
                genre: "features",
                imageSrc: "assets/images/bt-feature.png",
                options: ["A blue head with a black eye stripe", "Long red legs and a red beak", "A grey head and an orange breast", "A long hooked beak"],
                correctAnswer: "A blue head with a black eye stripe",
            },
        ],
    },
    cormorant: {
        birdName: "Cormorant",
        outlineImageSrc: "assets/images/cm-outline.png",
        finishedImageSrc: "assets/images/cm-final.png",
        funFact: "Fun fact... Cormorants dive underwater to catch food. That's why you'll often see them standing like this, to dry their wings out after diving.",
        quiz: [
            {
                question: "What size is the bird?",
                genre: "size",
                imageSrc: "assets/images/cm-size.png",
                options: ["Smaller than 30 cm", "Between 30cm and 50cm", "Between 80cm and 100cm", "Larger than 100cm"],
                correctAnswer: "Between 80cm and 100cm",
            },
            {
                question: "What colour is the bird?",
                genre: "colour",
                imageSrc: "assets/images/cm-colour.png",
                options: ["Blacky-Brown and White", "Yellow, Green and Grey", "Brown, White and Red", "Bluey-Yellow and White"],
                correctAnswer: "Blacky-Brown and White",
            },
            {
                question: "What is the bird doing?",
                genre: "location",
                imageSrc: "assets/images/cm-action.png",
                options: ["Perching on a feeder", "Perching on a rooftop", "Perching beside water", "Perching in a tree"],
                correctAnswer: "Perching beside water",
            },
            {
                question: "What distinctive feature does this bird have?",
                genre: "features",
                imageSrc: "assets/images/cm-feature.png",
                options: ["A fan shaped tail", "A wing-outstretched posture", "A short chunky beak", "A one-legged stance"],
                correctAnswer: "A wing-outstretched posture",
            },
        ],
    },
    magpie: {
        birdName: "Magpie",
        outlineImageSrc: "assets/images/mp-outline.png",
        finishedImageSrc: "assets/images/mp-final.png",
        funFact: "Fun fact... Magpies possess an extremely long tail. In fact, a magpie’s tail is often roughly the same length as its entire body.",
        quiz: [
            {
                question: "What size is the bird?",
                genre: "size",
                imageSrc: "assets/images/mp-size.png",
                options: ["Smaller than 30 cm", "Between 30cm and 50cm", "Between 80cm and 100cm", "Larger than 100cm"],
                correctAnswer: "Between 30cm and 50cm",
            },
            {
                question: "What colour is the bird?",
                genre: "colour",
                imageSrc: "assets/images/mp-colour.png",
                options: ["Brown, White and Red", "Yellow, Red and Brown", "Brown, Black and Grey", "Black, Blue and White"],
                correctAnswer: "Black, Blue and White",
            },
            {
                question: "What is the bird doing?",
                genre: "location",
                imageSrc: "assets/images/mp-action.png",
                options: ["Perching beside water", "Swimming in a pond", "Flying out of a tree", "Flying above the sea"],
                correctAnswer: "Flying out of a tree",
            },
            {
                question: "What distinctive feature does this bird have?",
                genre: "features",
                imageSrc: "assets/images/mp-feature.png",
                options: ["Long iridescent blue-green tail feathers", "A green head with a black eye stripe", "A black head and a red breast", "An orange-yellow beak"],
                correctAnswer: "Long iridescent blue-green tail feathers",
            },
        ],
    },
    goldfinch: {
        birdName: "Goldfinch",
        outlineImageSrc: "assets/images/gf-outline.png",
        finishedImageSrc: "assets/images/gf-final.png",
        funFact: "Did you know... The collective name for these highly colourful birds is a 'charm', is derived from old English and refers to the goldfinches’ twittering song.",
        quiz: [
            {
                question: "What size is the bird?",
                genre: "size",
                imageSrc: "assets/images/gf-size.png",
                options: ["Smaller than 20 cm", "Between 20cm and 30cm", "Between 30cm and 50cm", "Larger than 50cm"],
                correctAnswer: "Smaller than 20 cm",
            },
            {
                question: "What colour is the bird?",
                genre: "colour",
                imageSrc: "assets/images/gf-colour.png",
                options: ["Green, White, Brown, and Yellow", "Black, Grey, White and Brown", "Black, Brown, White and Yellow", "Blue-Grey, Red and Brown"],
                correctAnswer: "Black, Brown, White and Yellow",
            },
            {
                question: "What is the bird doing?",
                genre: "location",
                imageSrc: "assets/images/gf-action.png",
                options: ["Singing on a rooftop", "Nesting beside water", "Feeding on the ground", "Hiding in a reedbed"],
                correctAnswer: "Singing on a rooftop",
            },
            {
                question: "What distinctive feature does this bird have?",
                genre: "features",
                imageSrc: "assets/images/gf-feature.png",
                options: ["A wing-outstretched posture", "A golden eye ring", "A long black neck", "A bright red face"],
                correctAnswer: "A bright red face",
            },
        ],
    },
};

//Game Object

let game = {
    currentBird: [],
    currentBirdQuiz: [],
    roundNumber: 1,
    score: 0,
    turnScore: 0,
    turnNumber: 0,
    submittedTurnAnswer: "",
};

//Global Variables

let selectedBird;

//Functions

function giveGameFeedback() {
    let finalResultsFeedback;
    if (game.score >= 15) {
        finalResultsFeedback = "Congratulations, you can now identify these common British birds";
    } else if (game.score >= 10 && game.score <= 14) {
        finalResultsFeedback = "Well done, you have a good chance of being able to identify these common British birds";
    } else if (game.score <= 9) {
        finalResultsFeedback = "Commiserations. Why not have another go to improve your bird identifying skills?";
    }
    return finalResultsFeedback;
}

function setFinalResultsScreen() {
    $("#bird-collection").removeClass("d-none");
    $("#end-game-screen").removeClass("d-none");
    hideQuestionAnswerScreen() 
    $("#final-game-score").text(game.score);
    $("#final-results-feedback").text(giveGameFeedback());
    $("#end-game-button-box").removeClass("d-none");
}


/** Shows the user's final results at end of game in the end game box*/
function showFinalResults() {
    $("#game-box").fadeOut(500, function() {
        setFinalResultsScreen();
        $("#game-box").fadeIn(1000);
    });
}

/** Removes a class from the bird image. Stops the user being able to select the same bird twice*/
function removeCompletedBird() {
    $(".highlight").removeClass("bird-select").removeClass("highlight").attr("src", game.currentBird.finishedImageSrc);
}

/** Provides the end of round feedback based on score from 4 turns. Takes turn score and current bird as parameters*/
function giveRoundFeedback(a, b) {
    if (a >= 4) {
        $("#feedback").text(`Congratulations, you correctly identified a ${b}`);
    } else if (a === 3) {
        $("#feedback").text(`Well done, it's quite likely you saw a ${b}`);
    } else if (a === 2) {
        $("#feedback").text(`Hmmm, it's possible what you saw was a ${b}`);
    } else {
        $("#feedback").text(`Better luck next time! This is a ${b}`);
    }
}

function setRoundResults() {
    $("#question-image").html(`<img src="${game.currentBird.finishedImageSrc}">`);
    $("#questions-box").addClass("d-none");
    $("#round-results-box").removeClass("d-none");
    $("#results-text").text(`${game.turnScore}`);
    $("#bird-fact").text(`${game.currentBird.funFact}`);
    giveRoundFeedback(game.turnScore, game.currentBird.birdName);
}

/** Changes the Game Box to the end of turn screen and displays the round score, finished bird image and fun fact.*/
function showRoundResults() {
    $("#game-box").fadeOut(500, function () {
        setRoundResults();
        $("#game-box").fadeIn(1000);
    });
    removeCompletedBird();
}

/** Prompted by check answer. Counts turn number, calls gameRound or calls showRoundResults after 4 questions.*/
function callNextTurn() {
    game.turnNumber = game.turnNumber + 1;
    if (game.turnNumber < 4) {
        gameRound(game.turnNumber);
    } else {
        game.roundNumber = game.roundNumber + 1;
        showRoundResults();
    }
}

/** Adds the score to the Turn score (out of 4) and the game score (out of 20) */
function addScore() {
    game.score = game.score + 1;
    game.turnScore = game.turnScore + 1;
}

/** Prompted by button click. Checks user answer against bird object. Changes score indicator icon colour, calls addScore if correct.
 * Calls callNextTurn function
 * Counts turn number, calls showRoundResults after 4 questions.
 * */
function checkTurnAnswer(x, y) {
    //Variable to select score success indicicator icon relevant to turn question
    let iconColour = document.getElementById(game.currentBirdQuiz[y].genre);
    if (x === game.currentBirdQuiz[y].correctAnswer) {
        $(iconColour).removeClass("black").addClass("green");
        addScore();
    } else {
        $(iconColour).removeClass("black").addClass("red");
    }
    //split the below out
    callNextTurn();
}

function showQuestionAnswersScreen() {
    $("#questions-box").removeClass("d-none");
    $("#round-box").removeClass("d-none");
}

function setQuestionAnswers(i) {
    //move below out into own function?
    $(".answer-btn").removeClass("highlight-answer-option");
    $("#answer-submit-alert").addClass("d-none")
    $("#question-image").html(`<img src="${game.currentBirdQuiz[i].imageSrc}">`);
    $("#question-text").text(`${game.currentBirdQuiz[i].question}`);
    $("#answer-option-1").text(`${game.currentBirdQuiz[i].options[0]}`);
    $("#answer-option-2").text(`${game.currentBirdQuiz[i].options[1]}`);
    $("#answer-option-3").text(`${game.currentBirdQuiz[i].options[2]}`);
    $("#answer-option-4").text(`${game.currentBirdQuiz[i].options[3]}`);
}

function hideBirdCollectionScreen() {
    $("#bird-collection").addClass("d-none");
    $("#bird-collection-screen").addClass("d-none");
    $("#submit-bird-button-box").addClass("d-none");
}

/** Round of the game. Shows turn questions and changes image for each turn.*/
function gameRound(i) {
    $("#game-box").fadeOut(500, function () {
        hideBirdCollectionScreen();
        setQuestionAnswers(i);
        //the below doesn't need to be done every turn
        showQuestionAnswersScreen();
        //watch out if the below loads ok
        $("#game-box").fadeIn(1000);
    });
}

/** function run after submitbird button clicked. Gets ID of bird selected and puts content into Game Object. Calls initial gameRound function*/
function submitBird() {
    selectedBird = document.getElementsByClassName("highlight");
    game.currentBird = Question_Bank[selectedBird[0].id];
    game.currentBirdQuiz = Question_Bank[selectedBird[0].id].quiz;
    gameRound(game.turnNumber);
}

/** Allows user to select a bird. Will only allow to select one bird, and must select a bird to be able to proceed.*/
function pickBirdEvent() {
    $("#submit-bird").addClass("disabled");
    $(".bird-select").click(function () {
        if ($(this).hasClass("bird-select")) {
            $(".bird-select").removeClass("highlight");
            $(this).addClass("highlight");
            $("#submit-bird").removeClass("disabled");
        } else {
            $("#submit-bird").addClass("disabled");
        }
    });
}

function hideHowToPlayBox() {
    $("#how-to-play-box").removeClass("d-none");
}

function hideQuestionAnswerScreen() {
    $("#round-box").addClass("d-none");
    $(".icons").children().removeClass("green").removeClass("red").addClass("black");
    $("#round-results-box").addClass("d-none");
}

function showBirdCollectionScreen(){
    //remove gameinital load screen line out?
    $("#game-initial-load-screen").addClass("d-none");
    $("#bird-collection").removeClass("d-none");
    $("#bird-collection-screen").removeClass("d-none");
    $("#game-round-number").text(game.roundNumber);
    $("#submit-bird-button-box").removeClass("d-none");
    $("#game-box").fadeIn(1000, pickBirdEvent());
}

function loadRoundView() {
    //not sure hideHowToPlay should be called
    hideHowToPlayBox();
    showBirdCollectionScreen();
    hideQuestionAnswerScreen();
}

/** Start new round Animation - loads birds*/
function startNewRound() {
    game.currentBird = [];
    game.currentBirdQuiz = [];
    game.turnNumber = 0;
    game.turnScore = 0;
    $("#game-box").fadeOut(500, function() {
        loadRoundView();
    });
}

/** Resets images if user chooses to play again Calls start new game*/
function resetImages() {
    $("#blackbird").attr("src", Question_Bank.blackbird.outlineImageSrc);
    $("#blueTit").attr("src", Question_Bank.blueTit.outlineImageSrc);
    $("#cormorant").attr("src", Question_Bank.cormorant.outlineImageSrc);
    $("#magpie").attr("src", Question_Bank.magpie.outlineImageSrc);
    $("#goldfinch").attr("src", Question_Bank.goldfinch.outlineImageSrc);
}


/** Adds select class to all images*/
function addBirdSelectClass() {
    $(".collection-view").children("div").children().addClass("bird-select");
}
    

/** Resets Game object. Is called by start new Game.*/
function resetGame() {
    game.currentBird = [];
    game.currentBirdQuiz = [];
    game.score = 0;
    game.turnNumber = 0;
    game.roundNumber = 1;
    game.submittedTurnAnswer = "";
}

function playAgain() {
    $("#end-game-button-box").addClass("d-none");
    resetImages();
    //removed startNewgame from reset images function. Refactor so this function is not needed?
    startNewGame();
}

/** Starts new game.*/
function startNewGame() {
    resetGame();
    addBirdSelectClass();
    //check if this works - was in reset game fucntion
    startNewRound();
}

/** 
 * Adds the highlight-answer-option class to the clicked answer option button, and removes it from the other answer option buttons.
 * Function is called when an answer option button is clicked.
*/
function resetHighlightedAnswer(answer) {
    $(".answer-btn").removeClass("highlight-answer-option");
    $(answer).addClass("highlight-answer-option");
}

function addCorrectButtonAction(buttonClicked) {
    if (buttonClicked.getAttribute("button-command") === "start-new-game") {
        startNewGame();
    } else if (buttonClicked.getAttribute("button-command") === "submit-bird") {
        if ($(".bird-select").hasClass("highlight")) {
            submitBird();
        } else {
            //change alert
            alert("Please select a bird.");
        }
    } else if (buttonClicked.getAttribute("button-command") === "submit-answer") {
        if ($(".highlight-answer-option").text()) {
            game.submittedTurnAnswer = $(".highlight-answer-option").text();
            checkTurnAnswer(game.submittedTurnAnswer, game.turnNumber);
        } else {
            //change alert
            $("#answer-submit-alert").removeClass("d-none")
        }
    } else if (buttonClicked.getAttribute("button-command") === "start-next-round") {
        if (game.roundNumber <= 5) {
            startNewRound();
        } else {
            showFinalResults();
        }
    } else if (buttonClicked.getAttribute("button-command") === "play-again") {
        $("#game-box").fadeOut(1000, function(){
            //further test is I can remove function and it fades properly
            playAgain();
        });
    }
}

/** 
 * Adds event listeners to game buttons.
 * Function is called when DOM content is loaded
*/
function addEventListeners() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            addCorrectButtonAction(this);
        });
    }
}

/** 
 * Wait for the DOM to finish loading before running the game
 * Get the button elements and add event listeners to them
*/
document.addEventListener("DOMContentLoaded", addEventListeners());

/** 
 * Event happens on click of an answer option button. 
 * Calls a function to add the highlight-answer-option class to the clicked answer option button, and remove it from other answer option buttons.
*/
$(".answer-btn").on("click", function(){
    resetHighlightedAnswer(this);
});
