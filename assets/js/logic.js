$(document).ready(function(){
    $("#titleCont").hide();
    $("#textCont").hide();
});

$("#start").on("click", function(){
    $("#intro").hide();
    $("#titleCont").show();
    $("#textCont").show();
});

$("#submit").on("click", function(){
    location.reload();
});  



