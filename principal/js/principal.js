$(document).ready(function () {
    
    function hayUsuario(){
        $.ajax({
            url: "../principal/php/hayUsuario.php",
            success: function (respuesta) {
                if(respuesta==1){
                    $('#cerrarSesion').show();
                    $('#inicioSesion').hide();
                    $('#perfil').show();
                }else{
                    $('#cerrarSesion').hide();
                    $('#inicioSesion').show();
                    $('#perfil').hide();
                }
                
            }
        });
    }

    hayUsuario();

    $('#cerrarSesion').click(function (e) { 
        e.preventDefault();
        $.ajax({
            url: "../principal/php/cerrarSesion.php",
            success: function (respuesta) {
                if(respuesta==1){
                    $('#cerrarSesion').hide();
                    $('#inicioSesion').show();
                    $('#perfil').hide();
                }else{
                    $('#cerrarSesion').hide();
                    $('#inicioSesion').show();
                    $('#perfil').hide();
                }
                
            }
        });
    });

    $('#perfil').click(function (e) { 
        e.preventDefault();
        window.location.replace('../perfiles/perfil.html');
        
    });



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