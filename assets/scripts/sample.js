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