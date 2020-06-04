$(document).ready(function () {
    
    var contenedor=$('#contenedor');


    function cargaRankig(){

        $.ajax({
            url: "../ranking/php/cargaRanking.php",
            success: function (respuesta) {
                


            }
        });
    }
});