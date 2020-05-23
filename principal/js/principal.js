$(document).ready(function () {
    
    $('#carouselExampleCaptions').carousel({
        interval: 200,
    })


    $("#atras").click(function(){
        $('#carouselExampleCaptions').carousel("prev");
    });


    $("#next").click(function(){
        $('#carouselExampleCaptions').carousel("next");
});

});