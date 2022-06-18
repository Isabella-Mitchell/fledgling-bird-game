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
