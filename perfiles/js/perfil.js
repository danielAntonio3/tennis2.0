$(document).ready(function () {
    
    var registrarUser=$('#registrarUser');

    registrarUser.click(function(){ 
        alert("hola");

        $.ajax({
            url: "../../",
            success: function (response) {
                
            }
        });
    });



});