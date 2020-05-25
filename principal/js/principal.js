$(document).ready(function () {
    
    $('#carouselExampleCaptions').carousel({
        interval: 2000,
    })


    $("#atras").click(function(){
        $('#carouselExampleCaptions').carousel("prev");
    });


    $("#next").click(function(){
        $('#carouselExampleCaptions').carousel("next");
        
    });

});