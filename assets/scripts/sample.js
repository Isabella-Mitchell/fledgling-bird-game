$(document).ready(function()  { 
    $("#button-card-1").mouseenter(function(){
        $("#par-1").fadeTo(200, 0.5);
    });
    $("#button-card-1").mouseleave(function(){
        $("#par-1").fadeTo(200, 1);
    });
    $("#button-card-2").mouseenter(function(){
        $("#par-2").fadeTo(1000, 0.5);
    });
    $("#button-card-2").mouseleave(function(){
        $("#par-2").fadeTo(1000, 1);
    });
    
});

function gameTurnListeners(){
    $(".answer-btn").on("click", function() {
        $(".answer-btn").removeClass("highlight");
        $(this).addClass("highlight");
    });
}

// From Jquery walkthrough - event listeners - removed as scripts at end?

$(document).ready(function()  {
});

$("#start-new-game").on("click", startNewRound());

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